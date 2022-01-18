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
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    border-bottom: 1px solid black;

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
