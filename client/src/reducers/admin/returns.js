export default (returnsAdmin = [], action) => {
    switch (action.type) {
        case 'GET_RETURNS_ADMIN':
            return [...action.payload]
        case 'UPDATE_RETURN_STATUS':
            const filteredArray = returnsAdmin.filter((item) => item._id !== action.payload._id)
            const newItem = action.payload
            return [...filteredArray, newItem]
        default:
            return returnsAdmin
    }
}