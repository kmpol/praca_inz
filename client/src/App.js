import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ForgotPasswordPageSuccess from './pages/ForgotPasswordPageSuccess'
import ResetPasswordPage from './pages/ResetPasswordPage'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage'

import Checkout from './checkout/Checkout'
import CheckoutSuccess from './checkout/CheckoutSuccess'
import CheckoutCancel from './checkout/CheckoutCancel'

import DashboardPage from './pages/admin/DashboardPage'
import UsersPage from './pages/admin/UsersPage'
import OrdersPage from './pages/admin/OrdersPage'
import OrderPage from './pages/admin/OrderPage'


//Styles
import './styles.css'



const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/products" component={ProductsPage} />
                    <Route path="/product/:id" component={ProductPage} />
                    <Route exact path="/cart" component={CartPage} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/success" component={CheckoutSuccess} />
                    <Route exact path="/canceled" component={CheckoutCancel} />

                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/forgotpassword" component={ForgotPasswordPage} />
                    <Route path="/forgotpassword/success" component={ForgotPasswordPageSuccess} />
                    <Route path="/resetpassword/:resetToken" component={ResetPasswordPage} />

                    <Route exact path="/admin/dashboard" component={DashboardPage} />
                    <Route path="/admin/dashboard/users" component={UsersPage} />
                    <Route exact path="/admin/dashboard/orders" component={OrdersPage} />
                    <Route path="/admin/dashboard/orders/:id" component={OrderPage} />

                    <Route path="*" component={NotFoundPage} />


                </Switch>

            </Router>
        </>
    )
}

export default App
