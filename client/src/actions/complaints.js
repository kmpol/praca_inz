import * as api from '../api'

export const createComplaint = (message, id, history) => async (dispatch) => {
    try {
        const { data } = await api.createComplaint(message, id)

        dispatch({ type: 'CREATE_COMPLAINT', payload: data })

        history.push('/account/orders')

    } catch (e) {
        console.log(e.message)
    }
}