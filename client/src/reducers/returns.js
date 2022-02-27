export default (returns = [], action) => {
    switch (action.type) {
        case 'CREATE_RETURN':
            return [...returns, action.payload]
        case 'GET_RETURNS':
            return [action.payload]
        default:
            return returns
    }
}