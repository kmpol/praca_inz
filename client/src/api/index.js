import axios from 'axios'

const url = 'http://localhost:5000/api'

const API = axios.create({ baseURL: url })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage?.getItem('profile')).token}`
    }

    return req
})

//Products
export const getProducts = () => API.get(`${url}/products`)
export const getProduct = (id) => API.get(`${url}/products/${id}`)
export const createProduct = (product) => API.post(`${url}/products`, product)

//Users and auth
export const createUser = (userInfo) => API.post(`${url}/users/register`, userInfo)
export const loginUser = (userInfo) => API.post(`${url}/users/login`, userInfo)
export const logoutUser = () => API.post(`${url}/users/logout`)
export const forgotPassword = (email) => API.post(`${url}/users/forgotpassword`, email)
export const resetPassword = (password, resetToken) => API.put(`${url}/users/resetpassword/${resetToken}`, password)

//Stripe checkout
export const checkout = async (body) => await API.post(`${url}/create-checkout-session`, body)

//Admin
export const getOrders = async () => await API.get(`${url}/orders`)
export const getUsers = async () => await API.get(`${url}/users`)
export const getOrder = async (id) => await API.get(`${url}/orders/${id}`)
export const getUser = async (id) => await API.get(`${url}/users/${id}`)
export const updateOrderStatus = async (status, id) => await API.put(`${url}/orders/${id}`, status)

export const getClientsTotal = async () => await API.get(`${url}/orders/clientstotal`)
export const getClientOrders = async (id) => await API.get(`${url}/orders/client/${id}/orderstotal`)