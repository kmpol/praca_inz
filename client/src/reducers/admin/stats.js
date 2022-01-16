const statusDefaultState = {
    clientsTotal: [],
    clientOrders: [],
    last7Days: [],
    last30Days: [],
    last7DaysOrders: [],
    last30DaysOrders: []
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
        case 'LAST_7_DAYS':
            return {
                ...state,
                last7Days: action.payload
            }
        case 'LAST_30_DAYS':
            return {
                ...state,
                last30Days: action.payload
            }
        case 'LAST_7_DAYS_ORDERS':
            return {
                ...state,
                last7DaysOrders: action.payload
            }
        case 'LAST_30_DAYS_ORDERS':
            return {
                ...state,
                last30DaysOrders: action.payload
            }
        default:
            return state
    }
}