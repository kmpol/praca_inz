// Later on: Implement from localStorage import!
const cartDefaultState = {
    products: [],
    quantity: 0,
    total: 0
}

const storeCart = (cartItems) => {
    const cart = cartItems
    localStorage.setItem('cart', JSON.stringify(cart))
}

const getCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (cart) {
        return cart
    } else {
        return {
            products: [],
            quantity: 0,
            total: 0
        }
    }

}


const cartReducer = (state = cartDefaultState, action) => {
    const cart = getCart()

    switch (action.type) {
        case 'ADD_PRODUCT':
            storeCart({
                products: [...cart.products, action.payload.product],
                quantity: cart.quantity + action.payload.quantity,
                total: cart.total + action.payload.total
            })
            return {
                ...state,
                products: [...state.products, action.payload.product],
                quantity: state.quantity + action.payload.quantity,
                total: state.total + action.payload.total
            }
        case 'ADD_QUANTITY_OF_ITEM':
            const id = action.id
            const productToEdit = cart.products.find((product) => product._id === id)
            const newProducts = cart.products.filter((product) => product._id != productToEdit._id)
            productToEdit.quantityOfItem += 1
            const newProductsToAdd = [...newProducts, productToEdit]
            storeCart({
                products: [...newProductsToAdd],
                quantity: cart.quantity,
                total: cart.total + productToEdit.price
            })
            return {
                ...state,
                products: [...newProductsToAdd],
                total: cart.total + productToEdit.price
            }
        case 'SUBTRACT_QUANTITY_OF_ITEM':
            const idSubtract = action.id
            const productToEditSubtract = cart.products.find((product) => product._id === idSubtract)
            const newProductsSubtract = cart.products.filter((product) => product._id != productToEditSubtract._id)
            productToEditSubtract.quantityOfItem -= 1
            const newProductsToAddSubtract = [...newProductsSubtract, productToEditSubtract]
            storeCart({
                products: [...newProductsToAddSubtract],
                quantity: cart.quantity,
                total: cart.total - productToEditSubtract.price
            })
            return {
                ...state,
                products: [...newProductsToAddSubtract],
                total: cart.total - productToEditSubtract.price
            }
        case 'CLEAR':
            localStorage.removeItem('cart')
            return {
                products: [],
                quantity: 0,
                total: 0
            }
        default:
            return state
    }
}

export default cartReducer;