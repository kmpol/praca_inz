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

export const getComplaints = async (req, res) => {
    try {
        const user = req.user
        const userComplaints = await Complaint.find({ owner: user._id })
        if (!userComplaints) {
            return res.status(404).send({ error: "Complaints not found" })
        }
        res.status(200).send(userComplaints)
    } catch (e) {
        res.status(500).send(e)
    }
}

export const getComplaintsAdmin = async (req, res) => {
    try {
        const complaints = await Complaint.find()
        if (!complaints) return res.status(404).send({ error: "Complaints not found!" })
        res.status(200).send(complaints)
    } catch (e) {
        res.status(500).send(e)
    }
}

export const sendRespond = async (req, res) => {
    const id = req.params.id
    try {
        const complaint = await Complaint.findById(id)
        if (!complaint) return res.status(404).send({ error: "resposne not found" })
        complaint.admin_response = req.body.admin_response
        await complaint.save()
        res.status(200).send(complaint)
    } catch (e) {
        res.status(500).send(e)
    }
}