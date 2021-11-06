import { combineReducers } from "redux";

import products from './products'
import auth from "./auth";
import filters from './filters'

export default combineReducers({
    auth,
    filters,
    products,
})
