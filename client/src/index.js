import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import dotenv from 'dotenv'
import reducers from './reducers/index'
import App from './App'

dotenv.config()

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`)

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const jsx = (
    <Provider store={store}>
        <Elements stripe={stripePromise}>
            <App />
        </Elements>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))