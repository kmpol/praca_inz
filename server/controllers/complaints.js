import Complaint from "../models/Complaint.js"

export const createComplaint = async (req, res) => {
    try {
        const original_order = req.params.id
        const user = req.user
        const complaint = new Complaint({ user_complaint: req.body.complaint, owner: user._id, original_order })

        await complaint.save()
        res.status(200).send(complaint)
    } catch (e) {
        res.status(500).send(e)
    }


}
