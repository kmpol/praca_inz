import React, { } from 'react'
import styled from 'styled-components'
import { withRouter, useHistory } from 'react-router-dom'

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

const CheckoutCancel = () => {
    const history = useHistory()

    return (
        <Container>
            <Title>Payment failed</Title>
            <Description>Payment was not successful</Description>
            <div>
                <Button onClick={() => { history.push('/') }}>Go back to shop</Button>
            </div>
        </Container>
    )
}

export default withRouter(CheckoutCancel)