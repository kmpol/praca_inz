import * as api from '../../api'


export const getShopConfig = () => async (dispatch) => {
    try {
        const { data } = await api.getShopConfig()

        dispatch({ type: 'GET_SHOP_CONFIG', payload: data })

    } catch (e) {
        console.log(e.message)
    }
}

export const updateShopConfig = (updates) => async (dispatch) => {
    try {
        const { data } = await api.updateShopConfig(updates)

        dispatch({ type: 'UPDATE_SHOP_CONFIG', payload: data })
    } catch (e) {
        console.log(e.message)
    }
}