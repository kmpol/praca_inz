export default (complaintsAdmin = [], action) => {
    switch (action.type) {
        case 'GET_COMPLAINTS_ADMIN':
            return [...action.payload]
        case 'UPDATE_COMPLAINT':
            const filterComplaints = complaintsAdmin.filter((item) => item._id !== action.payload._id)
            const newComplaint = action.payload
            return [...filterComplaints, newComplaint]
        default:
            return complaintsAdmin
    }
}