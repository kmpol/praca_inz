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
export const disableOrEnableProductSale = (id, boolean) => API.patch(`${url}/products/${id}`, { "isActiveSale": boolean })
export const updateProduct = (id, updates) => API.put(`${url}/products/${id}`, { ...updates })

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
export const createSlider = async (slider) => await API.post(`${url}/sliders`, slider)
export const getSliders = async () => await API.get(`${url}/sliders`)
export const getSlider = async (id) => await API.get(`${url}/sliders/${id}`)
export const removeSlider = async (id) => await API.delete(`${url}/sliders/${id}`)
export const updateSlider = async (id, slider) => await API.put(`${url}/sliders/${id}`, { ...slider })
export const updateSliderQueue = async (queue, id) => await API.put(`${url}/sliders/queue/${id}`, queue)
export const updateSliderStatus = async (status, id) => await API.put(`${url}/sliders/status/${id}`, status)
export const addCategory = async (category) => await API.post(`${url}/categories`, category)
export const getCategories = async () => await API.get(`${url}/categories`)

export const getClientsTotal = async () => await API.get(`${url}/orders/clientstotal`)
export const getClientOrders = async (id) => await API.get(`${url}/orders/client/${id}/orderstotal`)
export const getAdminStatsLast7Days = async () => await API.get(`${url}/orders/stats/last7Days`)
export const getAdminStatsLast30Days = async () => await API.get(`${url}/orders/stats/last30Days`)

export const getAdminStatsLast7DaysOrders = async () => await API.get(`${url}/orders/stats/lastorders7Days`)
export const getAdminStatsLast30DaysOrders = async () => await API.get(`${url}/orders/stats/lastorders30Days`)

//Orders
export const getClientLoggedOrders = async () => await API.get(`${url}/orders/client`)
export const hasReturnedOrder = async (id) => await API.put(`${url}/orders/hasreturned/${id}`)

//Returns
export const createReturn = async (products, id) => await API.post(`${url}/returns/${id}`, { products: [...products] })
export const getUserReturn = async () => await API.get(`${url}/returns`)
export const getReturnsAdmin = async () => await API.get(`${url}/returns/admin`)
export const updateReturnStatus = async (id, status) => await API.put(`${url}/returns/${id}/updateStatus`, status)