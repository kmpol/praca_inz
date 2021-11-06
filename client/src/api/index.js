import axios from 'axios'

const url = 'http://localhost:5000/api'

const API = axios.create({ baseURL: url })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage?.getItem('profile')).token}`
    }

    return req
})

export const getProducts = () => API.get(`${url}/products`)
export const getProduct = (id) => API.get(`${url}/products/${id}`)
export const createProduct = (product) => API.post(`${url}/products`, product)

export const createUser = (userInfo) => API.post(`${url}/users/register`, userInfo)
export const loginUser = (userInfo) => API.post(`${url}/users/login`, userInfo)
export const logoutUser = () => API.post(`${url}/users/logout`)
export const forgotPassword = (email) => API.post(`${url}/users/forgotpassword`, email)
export const resetPassword = (password, resetToken) => API.put(`${url}/users/resetpassword/${resetToken}`, password)