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

export const getSliders = () => async (dispatch) => {
    try {
        const { data } = await api.getSliders()

        dispatch({
            type: "GET_SLIDERS",
            payload: data
        })
    } catch (e) {
        console.log(e.message)
    }
}

export const updateSliderQueue = (id, queue) => async (dispatch) => {
    try {
        const { data } = await api.updateSliderQueue({ "queue": queue }, id)

        dispatch({ type: 'UPDATE_SLIDER_QUEUE', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}

export const updateSliderStatus = (status, id) => async (dispatch) => {
    try {
        const { data } = await api.updateSliderStatus({ "isActive": status }, id)

        dispatch({ type: 'UPDATE_SLIDER_STATUS', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}