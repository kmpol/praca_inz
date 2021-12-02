import * as api from '../../api'

export const createSlider = (slider, history) => async (dispatch) => {
    try {
        const { data } = await api.createSlider(slider)

        // dispatch({ type: 'GET_USERS', payload: data })

        history.push('/admin/dashboard')
    } catch (e) {
        console.log(e.message)
    }
}