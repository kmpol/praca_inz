export default (sliders = [], action) => {
    switch (action.type) {
        case 'GET_SLIDERS':
            return action.payload
        case 'UPDATE_SLIDER_QUEUE':
            const filterSliders = sliders.filter((item) => item._id !== action.payload._id)
            const newSlider = action.payload
            return [...filterSliders, newSlider]
        default:
            return sliders
    }
}