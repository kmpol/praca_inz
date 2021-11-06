import moment from 'moment';

// Filters reducer
const filtersReducerDefaultState = {
    gender: '',
    size: '',
    color: ''
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_GENDER_FILTER':
            return {
                ...state,
                gender: action.gender
            }
        case 'SET_SIZE_FILTER':
            return {
                ...state,
                size: action.size
            }
        case 'SET_COLOR_FILTER':
            return {
                ...state,
                color: action.color
            }
        default:
            return state
    }
}

export default filtersReducer;