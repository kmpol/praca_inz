// Later on: Implement from localStorage import!
const cartDefaultState = {
    products: [],
    quantity: 0,
    total: 0
}

const cartReducer = (state = cartDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload.product],
                quantity: state.quantity + action.payload.quantity,
                total: state.total + action.payload.total
            }
        case 'ADD_QUANTITY_OF_ITEM':
            const id = action.id
            const productToEdit = state.products.find((product) => product._id === id)
            const newProducts = state.products.filter((product) => product._id != productToEdit._id)
            productToEdit.quantityOfItem += 1
            const newProductsToAdd = [...newProducts, productToEdit]
            return {
                ...state,
                products: [...newProductsToAdd],
                total: state.total + productToEdit.price
            }
        case 'SUBTRACT_QUANTITY_OF_ITEM':
            const idSubtract = action.id
            const productToEditSubtract = state.products.find((product) => product._id === idSubtract)
            const newProductsSubtract = state.products.filter((product) => product._id != productToEditSubtract._id)
            productToEditSubtract.quantityOfItem -= 1
            const newProductsToAddSubtract = [...newProductsSubtract, productToEditSubtract]
            return {
                ...state,
                products: [...newProductsToAddSubtract],
                total: state.total - productToEditSubtract.price
            }
        default:
            return state
    }
}

export default cartReducer;