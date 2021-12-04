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

        return data

    } catch (e) {
        console.log(e.message)
    }
}

export const getProductToEdit = (id) => async (dispatch) => {
    try {
        const { data } = await api.getProduct(id)

        dispatch({ type: 'GET_PRODUCT_EDIT', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}

export const createProduct = (product, history) => async (dispatch) => {
    try {
        const { data } = await api.createProduct(product)

        dispatch({ type: 'CREATE_PRODUCT', payload: data })

        history.push('/admin/dashboard/products')
    } catch (e) {
        console.log(e.message)
    }
}

export const disableOrEnableProductSale = (id, isActiveSale) => async (dispatch) => {
    try {
        const { data } = await api.disableOrEnableProductSale(id, isActiveSale)
        dispatch({ type: 'UPDATE_SALES_STATUS', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}

export const updateProduct = (id, updates, history) => async (dispatch) => {
    try {
        const { data } = await api.updateProduct(id, updates)

        dispatch({ type: 'UPDATE_PRODUCT', payload: data })

        history.push('/admin/dashboard/products')
    } catch (e) {
        console.log(e.message)
    }
}