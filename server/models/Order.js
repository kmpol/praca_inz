import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    address: {
        type: Object
    },
    payment: {
        type: Object
    },
    status: String,
    owner: {
        type: String,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema)

export default Order