export default (complaintsAdmin = [], action) => {
    switch (action.type) {
        case 'GET_COMPLAINTS_ADMIN':
            return [...action.payload]
        default:
            return complaintsAdmin
    }
}