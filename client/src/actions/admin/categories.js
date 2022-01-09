import * as api from '../../api'

export const addCategory = (category, setIsDuplicated) => async (dispatch) => {
    try {
        setIsDuplicated(false)
        const { data } = await api.addCategory(category)

    } catch (e) {
        setIsDuplicated(true)
        console.log(e.message)
    }
}

export const getCategories = (category) => async (dispatch) => {
    try {
        const { data } = await api.getCategories(category)

        dispatch({
            type: "GET_CATEGORIES",
            payload: data
        })
    } catch (e) {
        console.log(e.message)
    }
}