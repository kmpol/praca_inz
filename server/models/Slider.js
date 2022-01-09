import mongoose from 'mongoose'

const sldierSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    queue: {
        type: Number,
        default: 999
    }
}, {
    timestamps: true
})


const Slider = mongoose.model('Slider', sldierSchema)

export default Slider