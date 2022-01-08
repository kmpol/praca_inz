import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import validator from 'validator'
import crypto from 'crypto'
dotenv.config()

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("This is not an email!")
            }
        }
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    tokens: [{
        token: {
            type: String
        }
    }],
    resetPasswordToken: {
        type: String,
    },
    resetPasswordExpire: {
        type: Date
    }
})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user.id.toString(), isAdmin: user.isAdmin }, process.env.JWT_SECRET)


    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

userSchema.methods.generateResetPasswordToken = async function () {
    const resetToken = crypto.randomBytes(20).toString("hex")

    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex")

    this.resetPasswordExpire = Date.now() + (10 * 60 * 1000)

    await this.save()
    return resetToken
}

userSchema.statics.isEmailTaken = async (email) => {
    const user = await User.findOne({ email })

    if (user) {
        return true
    }

    return false
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('Unable to login')
    }
    const isMatchPassword = await bcrypt.compare(password, user.password)
    if (!isMatchPassword) {
        throw new Error('Unable to login')
    }
    return user
}

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

export default User