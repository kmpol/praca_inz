import * as api from '../api/index.js'

export const getClientOrders = () => async (dispatch) => {
    try {
        const { data } = await api.getClientLoggedOrders()

        dispatch({ type: 'GET_ORDERS', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}

export const hasReturned = (id, history) => async (dispatch) => {
    try {
        const { data } = await api.hasReturnedOrder(id)

        history.push('/account/returns')
    } catch (e) {
        console.log(e.message)
    }
}

export const hasComplained = (id, history) => async (dispatch) => {
    try {
        const { data } = await api.hasComplainedOrder(id)

        history.push('/account/complaints')
    } catch (e) {
        console.log(e.message)
    }
}