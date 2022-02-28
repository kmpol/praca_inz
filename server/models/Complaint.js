import mongoose from 'mongoose'

const complaintSchema = new mongoose.Schema({
    user_complaint: {
        type: String,
    },
    admin_response: {
        type: String,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    original_order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }
}, {
    timestamps: true
})

const Complaint = mongoose.model('Comaplint', complaintSchema)

export default Complaint