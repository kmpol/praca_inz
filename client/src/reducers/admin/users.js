// NAPISAC ORDERS REDUCER I WJEBAC GO DO COMBINED XD
export default (orders = [], action) => {
    switch (action.type) {
        case 'GET_USERS':
            return action.payload
        default:
            return orders
    }
}