import * as api from '../api'

export const createUser = (userInfo, history, setIsFetching, setError) => async (dispatch) => {
    try {
        setIsFetching(true)
        const { data } = await api.createUser(userInfo)
        dispatch({ type: 'CREATE_LOGIN_USER', payload: data })
        setIsFetching(false)
        history.push('/')
    } catch (e) {
        console.log(e.message)
        setError(true)
    }
}

export const loginUser = (userInfo, history, setError, setIsFetching) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(userInfo)
        dispatch({ type: 'CREATE_LOGIN_USER', payload: data })
        setIsFetching(false)
        history.push('/')
    } catch (e) {
        console.log(e.message)
        setError(true)
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
        await api.logoutUser()

        dispatch({ type: 'LOGOUT_USER' })
    } catch (e) {
        console.log(e.message)
    }
}

export const forgotPassword = (email, history, setError) => async () => {
    try {
        await api.forgotPassword(email)
        setError(false)
        history.push('/forgotpassword/success')
    } catch (e) {
        setError(true)
    }
}

export const resetPassword = (password, resetToken, history, setError) => async () => {
    try {
        await api.resetPassword(password, resetToken)
        setError(false)
        history.push('/login')
    } catch (e) {
        console.log(e.message)
        setError(true)
    }
}