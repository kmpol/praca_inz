import { combineReducers } from "redux";

import products from './products'
import auth from "./auth";
import filters from './filters'
import cart from './cart'

export default combineReducers({
    auth,
    filters,
    products,
    cart
})
