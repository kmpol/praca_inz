const filtersReducerDefaultState = {
    status: '',
    sortBy: ''
};

const filtersOrderReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_ORDER_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            }
        default:
            return state
    }
}

export default filtersOrderReducer;