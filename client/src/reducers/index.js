import { combineReducers } from "redux";

import products from './products'
import auth from "./auth";
import filters from './filters'
import cart from './cart'
import slider from './sldier'
import sliders from './admin/sliders'
import adminOrders from './admin/orders'
import filterOrders from "./admin/fitlers";
import adminUsers from './admin/users'
import stats from "./admin/stats";
import adminProducts from './admin/products'
import categories from "./categories";
import orders from "./orders";
import returns from "./returns";
import returnsAdmin from './admin/returns';
import complaints from './complaints';
import complaintsAdmin from './admin/complaints'

export default combineReducers({
    auth,
    filters,
    products,
    cart,
    slider,
    sliders,
    adminOrders,
    filterOrders,
    adminUsers,
    stats,
    adminProducts,
    categories,
    orders,
    returns,
    returnsAdmin,
    complaints,
    complaintsAdmin
})
