import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import StripeCheckout from './StripeCheckout'

const Container = styled.div`

`
const CheckoutSummaryText = styled.h2`

`
const CheckoutTotalItems = styled.h3`

`
const CheckoutAmount = styled.h4`

`


const Checkout = () => {

    const [cart, setCart] = useState(JSON?.parse(localStorage?.getItem('cart')))

    return (
        <Container>
            <CheckoutSummaryText>Checkout summary</CheckoutSummaryText>
            <CheckoutTotalItems>{`Total Items you're about to buy: ${cart.quantity}`}</CheckoutTotalItems>
            <CheckoutAmount>{`The total amount: $${(cart.total).toFixed(2)}`}</CheckoutAmount>
            <StripeCheckout />
        </Container>
    )
}

export default Checkout
