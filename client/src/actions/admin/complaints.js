import * as api from '../../api'

export const getComplaintsAdmin = () => async (dispatch) => {
    try {
        const { data } = await api.getComplaintsAdmin()

        dispatch({ type: 'GET_COMPLAINTS_ADMIN', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}

export const createRespond = (response, id) => async (dispatch) => {
    try {
        const { data } = await api.createResponse(response, id)

        dispatch({ type: 'UPDATE_COMPLAINT', payload: data })

    } catch (e) {

    }
}