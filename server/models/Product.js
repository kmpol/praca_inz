import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    mainCategory: {
        type: String
    },
    gender: {
        type: String
    },
    size: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String
    },
    itemsInStock: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
})

productSchema.virtual('order', {
    ref: 'Order',
    localField: '_id',
    foreignField: 'products'
})

const Product = mongoose.model('Product', productSchema)

export default Product