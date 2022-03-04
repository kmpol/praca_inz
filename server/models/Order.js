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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Product'
        },
        quantity: Number,
        unit_price: Number
    }],
    has_returned: {
        type: Boolean,
        default: false
    },
    has_complained: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema)

export default Order