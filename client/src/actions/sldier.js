import * as api from '../api/index.js'

export const getSliders = () => async (dispatch) => {
    try {
        const { data } = await api.getSliders()

        dispatch({ type: 'GET_SLIDER', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}
