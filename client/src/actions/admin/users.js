import * as api from '../../api'

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getUsers()

        dispatch({ type: 'GET_USERS', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}