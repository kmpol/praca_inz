export default (shopConfig = [], action) => {
    switch (action.type) {
        case 'GET_SHOP_CONFIG':
            return action.payload
        case 'UPDATE_SHOP_CONFIG':
            return action.payload
        default:
            return shopConfig
    }
}