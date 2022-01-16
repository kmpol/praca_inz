import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    
`
const OrderDetails = styled.p`
    padding: 10px;
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover{
        font-weight: 600;
    }
`

const OrderSmall = ({ order }) => {
    return (
        <StyledLink to={`/admin/dashboard/orders/${order._id}`}>
            <Container>
                <OrderDetails>{order.status}</OrderDetails>
                <OrderDetails>{order.payment.amount / 100} USD</OrderDetails>
                <OrderDetails>{moment(order.createdAt).format('YYYY-MM-DD')}</OrderDetails>
            </Container>
        </StyledLink>

    )
}

export default OrderSmall
