import * as api from '../../api'

export const getReturnsAdmin = () => async (dispatch) => {
    try {
        const { data } = await api.getReturnsAdmin()

        dispatch({ type: 'GET_RETURNS_ADMIN', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}

export const updateReturnStatus = (id, status) => async (dispatch) => {
    try {
        const { data } = await api.updateReturnStatus(id, status)

        dispatch({ type: 'UPDATE_RETURN_STATUS', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}