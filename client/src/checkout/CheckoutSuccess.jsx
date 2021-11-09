import React, { useEffect } from 'react'
import styled from 'styled-components'
import { withRouter, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearCart } from '../actions/cart'

const Container = styled.div`
    
`

const Title = styled.h1`

`

const Description = styled.p`

`

const Button = styled.button`
    background-color: #000;
    color: #fff;
    padding: 5px 25px;
    margin-top: 25px;
`

const CheckoutSuccess = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(clearCart())
    }, [])

    return (
        <Container>
            <Title>Thank you for placing an order</Title>
            <Description>We got your order and we will take care of it shortly!</Description>
            <div>
                <Button onClick={() => { history.push('/') }}>Go back to shop</Button>
            </div>
        </Container>
    )
}

export default withRouter(CheckoutSuccess)
