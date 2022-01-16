import * as api from '../../api/index'

export const getAdminStatsLast7Days = () => async (dispatch) => {
    try {
        const { data } = await api.getAdminStatsLast7Days()

        dispatch({ type: 'LAST_7_DAYS', payload: data })
    } catch (e) {
        console.log(e.message)
    }
}

export const getAdminStatsLast30Days = () => async (dispatch) => {
    try {
        const { data } = await api.getAdminStatsLast30Days()

        dispatch({ type: 'LAST_30_DAYS', payload: data })
    } catch (e) {
        console.log(e.message)
    }
}

export const getAdminStatsLast7DaysOrders = () => async (dispatch) => {
    try {
        const { data } = await api.getAdminStatsLast7DaysOrders()

        dispatch({ type: 'LAST_7_DAYS_ORDERS', payload: data })
    } catch (e) {
        console.log(e.message)
    }
}

export const getAdminStatsLast30DaysOrders = () => async (dispatch) => {
    try {
        const { data } = await api.getAdminStatsLast30DaysOrders()

        dispatch({ type: 'LAST_30_DAYS_ORDERS', payload: data })
    } catch (e) {
        console.log(e.message)
    }
}
