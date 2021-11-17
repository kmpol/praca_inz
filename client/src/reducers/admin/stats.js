const statusDefaultState = {
    clientsTotal: [],
    test: "test"
}

export default (state = statusDefaultState, action) => {
    switch (action.type) {
        case 'CLIENTS_TOTAL':
            return {
                ...state,
                clientsTotal: action.payload
            }
        default:
            return state
    }
}