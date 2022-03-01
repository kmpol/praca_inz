export default (complaints = [], action) => {
    switch (action.type) {
        case 'CREATE_COMPLAINT':
            return [...complaints, action.payload]
        case 'GET_COMPLAINTS':
            return [...action.payload]
        default:
            return complaints
    }
}