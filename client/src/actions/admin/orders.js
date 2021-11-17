import * as api from '../../api'

export const getOrders = () => async (dispatch) => {
    try {
        const { data } = await api.getOrders()

        dispatch({ type: 'GET_ORDERS', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}

export const getOrder = (id) => async (dispatch) => {
    try {
        const { data } = await api.getOrder(id)

        dispatch({ type: 'GET_ORDER', payload: data })
    } catch (e) {
        console.log(e.message)
    }
}

export const updateOrderStatus = (status, id) => async (dispatch) => {
    try {
        const { data } = await api.updateOrderStatus({ "status": status }, id)

        dispatch({ type: 'UPDATE_ORDER_STATUS', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}

export const getClientsTotal = () => async (dispatch) => {
    try {
        const { data } = await api.getClientsTotal()

        dispatch({ type: 'CLIENTS_TOTAL', payload: data })
    } catch (e) {
        console.log(e.message)
    }
}