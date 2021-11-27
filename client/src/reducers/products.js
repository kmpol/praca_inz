export default (products = [], action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return action.payload
        case 'CREATE_PRODUCT':
            return [...products, action.payload]
        case 'UPDATE_SALES_STATUS', 'UPDATE_PRODUCT':
            const filterProducts = products.filter((item) => item._id !== action.payload._id)
            const newProduct = action.payload
            return [...filterProducts, newProduct]
        default:
            return products
    }
}