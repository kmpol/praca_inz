import mongoose from 'mongoose'

const returnSchema = new mongoose.Schema({
    status: {
        type: String,
        default: 'new'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    original_order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    },
    products: [{
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: Number
    }]
}, {
    timestamps: true
})

const Return = mongoose.model('Return', returnSchema)

export default Return