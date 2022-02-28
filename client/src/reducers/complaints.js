export default (complaints = [], action) => {
    switch (action.type) {
        case 'CREATE_COMPLAINT':
            return [...complaints, action.payload]
        default:
            return complaints
    }
}