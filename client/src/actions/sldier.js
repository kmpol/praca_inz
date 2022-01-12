import * as api from '../api/index.js'

export const getSliders = () => async (dispatch) => {
    try {
        const { data } = await api.getSliders()

        dispatch({ type: 'GET_SLIDERS', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}

export const getSlider = (id) => async (dispatch) => {
    try {
        const { data } = await api.getSlider(id)

        dispatch({ type: 'GET_SLIDER', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}

export const updateSlider = (id, slider, history) => async (dispatch) => {
    try {
        const { data } = await api.updateSlider(id, slider)

        dispatch({ type: 'UPDATE_SLIDER', payload: data })

        history.push('/admin/dashboard/sliders/manageSliders')
    } catch (e) {
        console.log(e.message)
    }
}