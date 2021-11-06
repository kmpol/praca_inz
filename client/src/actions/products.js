import * as api from '../api'

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.getProducts()

        dispatch({ type: 'GET_PRODUCTS', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}

export const getProduct = (id) => async (dispatch) => {
    try {
        const { data } = await api.getProduct(id)

        dispatch({ type: 'GET_PRODUCT', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}

export const createProduct = (product) => async (dispatch) => {
    try {
        const { data } = await api.createProduct(product)

        dispatch({ type: 'CREATE_PRODUCT', payload: data })
    } catch (e) {
        console.log(e.message)
    }
}