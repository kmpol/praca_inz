import Order from '../models/Order.js';
import sendEmail from '../utils/email.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config()

export const createOrder = async (req, res) => {
    const owner = req.user
    console.log(owner)

    const order = new Order({
        ...req.body
    })

    try {
        const savedOrder = await order.save();

        const emailMessageBuyer = `
        <h1>You just placed an order in out store</h1>
        <h2>Thank you for your trust, we got your order and we are about to complete it :)</h2>
        <p>Your order amount: ${((savedOrder.payment.amount) / 100).toFixed(2)} ${savedOrder.payment.currency.toUpperCase()}</p>
        <p>Your order shipping address:</p>
        <p>Name: ${savedOrder.address.name}</p>
        <p>${savedOrder.address.line1}</p>
        <p>${savedOrder.address.line2 || ""}</p>
        <p>${savedOrder.address.postal_code} ${savedOrder.address.city}</p>
        <p>${savedOrder.address.country}</p>
    `

        const emailMessageSeller = `
        <h1>You have new order</h1>
        <h2>Go to admin page and check for details</h2>

    `

        try {
            sendEmail({
                to: savedOrder.address.email,
                subject: "Summary of your order",
                text: emailMessageBuyer
            })


            res.status(200).send({
                success: true,
                message: "Email has been sent to the client"
            })
        } catch (e) {
            res.status(400).send({ error: "Mail could not be sent!" })
        }

        try {
            sendEmail({
                to: process.env.EMAIL_ADMIN,
                subject: "You have sold item(s)!",
                text: emailMessageSeller
            })

            res.status(200).send({
                success: true,
                message: "Email has been sent to admin"
            })
        } catch (e) {
            res.status(400).send({ error: "Mail could not be sent!" })
        }
        res.status(201).send(savedOrder)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("products.product").exec()
        res.status(200).send(orders)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const getOrder = async (req, res) => {
    const id = req.params.id
    try {
        const order = await Order.findById(id).populate('products.product').exec()
        if (!order) return res.status(404).send({ error: "Order not found" })

        res.status(200).send(order)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const getOrdersClient = async (req, res) => {
    const user = req.user
    try {
        const orders = await Order.find({ owner: user._id })
        res.status(200).send(orders)
    } catch (e) {
        res.status(500).send(e.message)
    }

}

export const updateOrderStatus = async (req, res) => {
    const id = req.params.id
    const status = req.body.status

    try {
        const order = await Order.findById(id).populate("products.product").exec()
        if (!order) return res.status(404).send({ error: "Order not found" })

        order.status = status
        await order.save()

        res.status(200).send(order)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const getClientsTotal = async (req, res) => {
    try {
        const agregationResponse = await Order.aggregate([
            { $match: {} },
            { $group: { _id: "$owner", total: { $sum: "$payment.amount" } } }
        ])

        res.status(200).send(agregationResponse)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

// -> Find orders by user (owner) 
// -> group orders by days 
// -> sum orders amounts each day user placed an order 
// -> sort by date asc
export const getSingleClientOrdersTotal = async (req, res) => {
    const ownerId = req.params.id
    try {
        const agregationResponse = await Order.aggregate([
            { $match: { owner: mongoose.Types.ObjectId(`${ownerId}`) } },
            { $group: { _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } }, total: { $sum: "$payment.amount" } } },
            { $sort: { _id: 1 } }
        ])

        res.status(200).send(agregationResponse)
    } catch (e) {
        res.status(500).send(e.message)
    }
}