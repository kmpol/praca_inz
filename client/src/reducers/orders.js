export default (orders = [], action) => {
    switch (action.type) {
        case 'GET_ORDERS':
            return action.payload
        default:
            return orders
    }
}