import * as api from '../api'

export const createReturn = (products, id) => async (dispatch) => {
    try {
        const { data } = await api.createReturn(products, id)

        dispatch({ type: 'CREATE_RETURN', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}

export const getUserReturn = () => async (dispatch) => {
    try {
        const { data } = await api.getUserReturn()

        dispatch({ type: 'GET_RETURNS', payload: data })
    } catch (e) {
        console.log(e.message)
    }
}