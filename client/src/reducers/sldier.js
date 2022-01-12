export default (sliders = [], action) => {
    switch (action.type) {
        case 'GET_SLIDERS':
            return action.payload
        case 'GET_SLIDER':
            return action.payload
        default:
            return sliders
    }
}