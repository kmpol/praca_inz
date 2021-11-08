export const addProduct = (payload) => ({
    type: "ADD_PRODUCT",
    payload
})

export const addQuantity = (id) => ({
    type: "ADD_QUANTITY_OF_ITEM",
    id
})

export const subtractQuantity = (id) => ({
    type: "SUBTRACT_QUANTITY_OF_ITEM",
    id
})