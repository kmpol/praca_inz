import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ForgotPasswordPageSuccess from './pages/ForgotPasswordPageSuccess'
import ResetPasswordPage from './pages/ResetPasswordPage'

import AccountPage from './pages/AccountPage'
import AccountPageOrders from './pages/AccountPageOrders'
import AccountPageReturns from './pages/AccountPageReturns'
import AccountPageComplaints from './pages/AccountPageComplaints'
import CreateReturnPage from './pages/CreateReturnPage'
import CreateComplaintPage from './pages/CreateComplaintPage'

import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage'

import Checkout from './checkout/Checkout'
import CheckoutSuccess from './checkout/CheckoutSuccess'
import CheckoutCancel from './checkout/CheckoutCancel'

import DashboardPage from './pages/admin/DashboardPage'
import UsersPage from './pages/admin/UsersPage'
import UserPage from './pages/admin/UserPage'
import OrdersPage from './pages/admin/OrdersPage'
import OrderPage from './pages/admin/OrderPage'
import ProductsPageAdmin from './pages/admin/ProductsPageAdmin'
import AddProductPage from './pages/admin/AddProductPage'
import AddCategoryPage from './pages/admin/AddCategoryPage'
import EditProductPage from './pages/admin/EditProductPage'
import CreateSliderPage from './pages/admin/CreateSliderPage'
import EditSliderPage from './pages/admin/EditSliderPage'
import ReturnsPage from './pages/admin/ReturnsPage'
import ComplaintsPage from './pages/admin/ComplaintsPage'
import ConfigPage from './pages/admin/ConfigPage'

//Styles
import './styles.css'
import ManageSliderPage from './pages/admin/ManageSliderPage'

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    {/* Shop realted routes */}
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/products" component={ProductsPage} />
                    <Route path="/product/:id" component={ProductPage} />
                    <Route exact path="/cart" component={CartPage} />

                    {/* Checkout realted routes */}
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/success" component={CheckoutSuccess} />
                    <Route exact path="/canceled" component={CheckoutCancel} />

                    {/* User authorization realted routes */}
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/forgotpassword" component={ForgotPasswordPage} />
                    <Route path="/forgotpassword/success" component={ForgotPasswordPageSuccess} />
                    <Route path="/resetpassword/:resetToken" component={ResetPasswordPage} />

                    {/* Account related routes */}
                    <Route exact path="/account" component={AccountPage} />
                    <Route exact path="/account/orders" component={AccountPageOrders} />
                    <Route exact path="/account/returns" component={AccountPageReturns} />
                    <Route exact path="/account/complaints" component={AccountPageComplaints} />
                    <Route exact path="/account/returns/createReturn/:id" component={CreateReturnPage} />
                    <Route exact path="/account/complaints/createComplaint/:id" component={CreateComplaintPage} />

                    {/* Admin dashboard realted routes */}
                    <Route exact path="/admin/dashboard" component={DashboardPage} />
                    <Route exact path="/admin/dashboard/users" component={UsersPage} />
                    <Route path="/admin/dashboard/users/:id" component={UserPage} />
                    <Route exact path="/admin/dashboard/orders" component={OrdersPage} />
                    <Route path="/admin/dashboard/orders/:id" component={OrderPage} />
                    <Route exact path="/admin/dashboard/products" component={ProductsPageAdmin} />
                    <Route exact path="/admin/dashboard/products/addProduct" component={AddProductPage} />
                    <Route exact path="/admin/dashboard/categories/addCategory" component={AddCategoryPage} />
                    <Route exact path="/admin/dashboard/products/editProduct/:id" component={EditProductPage} />
                    <Route exact path="/admin/dashboard/sliders/createSlider" component={CreateSliderPage} />
                    <Route exact path="/admin/dashboard/sliders/editSlider/:id" component={EditSliderPage} />
                    <Route exact path="/admin/dashboard/sliders/manageSliders" component={ManageSliderPage} />
                    <Route exact path="/admin/dashboard/returns" component={ReturnsPage} />
                    <Route exact path="/admin/dashboard/complaints" component={ComplaintsPage} />
                    <Route exact path="/admin/dashboard/config" component={ConfigPage} />

                    <Route path="*" component={NotFoundPage} />
                </Switch>

            </Router>
        </>
    )
}

export default App
