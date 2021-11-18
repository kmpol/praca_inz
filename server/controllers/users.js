import User from '../models/User.js'
import sendEmail from '../utils/email.js'
import crypto from 'crypto'

export const createUser = async (req, res) => {
    const { name, email, password, repeatPassword } = req.body
    const user = new User({ name, email, password })

    if (password !== repeatPassword) {
        return res.status(400).send({ error: 'Passwords must be the same' })
    }
    try {
        const isEmailTaken = await User.isEmailTaken(req.body.email)
        if (isEmailTaken) {
            return res.status(400).send({ error: 'Email is taken already' })
        }
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(500).send(e)
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findByCredentials(email, password)
        const token = await user.generateAuthToken()
        res.status(200).send({ user, token })
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const logoutUser = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save()
        res.status(200).send()
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const forgotPassword = async (req, res) => {
    const { email } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).send({ error: "Email can not be sent!" })
        }

        const resetToken = await user.generateResetPasswordToken()

        const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`

        const emailMessage = `
            <h1>You just requested a password reset</h1>
            <p>Here is your link to password reset</p>
            <a href=${resetUrl} clicktracking=off >${resetUrl}</a>
        `

        try {
            sendEmail({
                to: user.email,
                subject: "Password reset request",
                text: emailMessage
            })

            res.status(200).send({
                success: true,
                message: "Email has been sent"
            })
        } catch (e) {
            user.resetPasswordToken = undefined
            user.resetPasswordExpire = undefined

            await user.save()

            res.status(500).send({
                error: 'Email can not be sent'
            })
        }

    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const resetPassword = async (req, res) => {
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.resetToken)
        .digest("hex")

    try {
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        })

        if (!user) {
            return res.status(400).send({
                error: "Invalid reset token"
            })
        }

        user.password = req.body.password
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save()

        res.status(200).send({
            success: true,
            message: "New password has been set"
        })
    } catch (e) {
        res.status(500).send(e.message)
    }
}

//Admin routes
export const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        if (!users) return res.status(404).send({ error: "Users not found" })
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const getUserAdmin = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id)
        if (!user) return res.status(404).send({ "error": "User not found" })
        res.status(200).send(user)
    } catch (e) {

    }
}