import React from 'react'
import { useStripe } from '@stripe/react-stripe-js'
import { useState } from 'react'
import styled from 'styled-components'

import * as api from '../api/index'

const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InputEmail = styled.input`
    display: flex;
    width: 50%;
    padding: 5px 0px;
    margin-bottom: 18px;
`

const CheckoutButton = styled.button`
    width: 25%;
    padding: 5px 0px;
`

const StripeCheckout = () => {
    const [cart, setCart] = useState(JSON?.parse(localStorage?.getItem('cart')))
    const [email, setEmail] = useState(JSON.parse(localStorage?.getItem('profile'))?.user?.email)
    const stripe = useStripe()

    const handleCheckoutSubmit = async (e) => {
        e.preventDefault()
        const line_items = cart.products.map((item) => {
            return {
                quantity: item.quantityOfItem,
                price_data: {
                    currency: 'usd',
                    unit_amount: item.price * 100, //Amount must be in cents
                    product_data: {
                        name: item.name,
                        images: []
                    }
                }
            }
        })
        const response = await api.checkout({
            line_items, customer_email: email
        })
        console.log(response)

        const { error } = await stripe.redirectToCheckout({
            sessionId: response.data.sessionId
        })

        if (error) {
            console.log(error)
        }
    }

    return (
        <Container onSubmit={handleCheckoutSubmit}>
            <InputEmail type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" value={email} />
            <CheckoutButton type="submit">Checkout</CheckoutButton>
        </Container>
    )
}

export default StripeCheckout
