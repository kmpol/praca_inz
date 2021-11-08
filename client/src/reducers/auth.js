export default (profile = { authInfo: null }, action) => {
    switch (action.type) {
        case 'CREATE_LOGIN_USER':
            localStorage.setItem('profile', JSON.stringify(action?.payload))
            return { ...profile, authInfo: action?.payload }
        case 'LOGOUT_USER':
            localStorage.removeItem('profile')
            return { ...profile }
        default:
            return profile
    }
}