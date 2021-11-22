export default (orders = [], action) => {
    switch (action.type) {
        case 'GET_ORDERS':
            return action.payload
        case 'GET_ORDER':
            return action.payload
        case 'CLEAR_ORDER':
            return []
        case 'UPDATE_ORDER_STATUS':
            const filterOrders = orders.filter((item) => item._id !== action.payload._id)
            const newOrder = action.payload
            return [...filterOrders, newOrder]
        default:
            return orders
    }
}