const productsDefaultState = {
    products: [],
    product: {}
}

export default (state = productsDefaultState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_EDIT':
            return {
                ...state,
                product: action.payload
            }
        case 'CLEAR_PRODUCT':
            return {
                ...state,
                product: {}
            }
        default:
            return state
    }
}