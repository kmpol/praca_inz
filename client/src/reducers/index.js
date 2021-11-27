import { combineReducers } from "redux";

import products from './products'
import auth from "./auth";
import filters from './filters'
import cart from './cart'
import adminOrders from './admin/orders'
import filterOrders from "./admin/fitlers";
import adminUsers from './admin/users'
import stats from "./admin/stats";
import adminProducts from './admin/products'

export default combineReducers({
    auth,
    filters,
    products,
    cart,
    adminOrders,
    filterOrders,
    adminUsers,
    stats,
    adminProducts
})
