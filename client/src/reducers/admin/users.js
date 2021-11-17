export default (orders = [], action) => {
    switch (action.type) {
        case 'GET_USERS':
            return action.payload
        default:
            return orders
    }
}