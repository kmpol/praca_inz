const statusDefaultState = {
    clientsTotal: [],
    clientOrders: []
}

export default (state = statusDefaultState, action) => {
    switch (action.type) {
        case 'CLIENTS_TOTAL':
            return {
                ...state,
                clientsTotal: action.payload
            }
        case 'CLIENT_ORDERS':
            return {
                ...state,
                clientOrders: action.payload
            }
        default:
            return state
    }
}