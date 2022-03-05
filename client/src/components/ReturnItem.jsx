import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 12px;
    width: 50vw;
    padding: 10px 10px 0px 10px;
    margin-top: 12px;
`

const OrderStatus = styled.p`
    font-weight: 600;
    color: ${props => props.status === 'accepted' ? 'green' : props.status === 'rejected' ? "red" : "#c7a903"};
`

const ReturnDetail = styled.p`
    display: ${props => props.num === 0 ? "none" : ""};
`

const ReturnItem = ({ item }) => {
    console.log(item)
    return (
        <Wrapper>
            <OrderStatus status={item.status}>status: {item.status}</OrderStatus>
            <ReturnDetail>Return date: {moment(item.createdAt).format('DD-MM-YYYY HH:mm')}</ReturnDetail>
            {
                item.products.map((product) => {
                    return <ReturnDetail num={product.quantity}>Product(s): {product.product_id.name} x {product.quantity} ({product.product_id._id})</ReturnDetail>
                })
            }
        </Wrapper>
    )
}

export default ReturnItem