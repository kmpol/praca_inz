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
import Checkout from './checkout/Checkout'
import CheckoutSuccess from './checkout/CheckoutSuccess'
import CheckoutCancel from './checkout/CheckoutCancel'

//Styles
import './styles.css'


const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/products" component={ProductsPage} />
                    <Route path="/product/:id" component={ProductPage} />
                    <Route path="/cart" component={CartPage} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/success" component={CheckoutSuccess} />
                    <Route path="/canceled" component={CheckoutCancel} />

                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route exact path="/forgotpassword" component={ForgotPasswordPage} />
                    <Route path="/forgotpassword/success" component={ForgotPasswordPageSuccess} />
                    <Route path="/resetpassword/:resetToken" component={ResetPasswordPage} />
                </Switch>
            </Router>
        </>
    )
}

export default App
