import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { updateOrderStatus } from '../../actions/admin/orders'

const Container = styled.div`
    width: 100%;
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
`
const OrderId = styled.p`
`

const OrderDate = styled.p`
`

const InfoContainer = styled.div`
    display: flex;
    padding: 24px 0px;
    align-items: center;
`

const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
`

const AddressTitle = styled.h4`

`

const AddressDetail = styled.p`
    
`

const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const PaymentTitle = styled.h4`

`

const PaymentAmount = styled.p`

`

const OrderStatusContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const OrderName = styled.h4`

`

const Select = styled.select``

const Option = styled.option``

const Order = ({ order, status }) => {

    const dispatch = useDispatch()

    const onStatusSelect = (e) => {
        const status = e.target.value
        dispatch(updateOrderStatus(status, order._id))
    }
    return (
        <Container>
            <OrderId>ID: {order._id}</OrderId>
            <OrderDate>{order.createdAt}</OrderDate>
            <InfoContainer>
                <AddressContainer>
                    <AddressTitle>Address:</AddressTitle>
                    <AddressDetail>{order.address.name}</AddressDetail>
                    <AddressDetail>{order.address.line1}</AddressDetail>
                    <AddressDetail>{order.address.line2 || ""}</AddressDetail>
                    <AddressDetail>{order.address.postal_code} {order.address.city}</AddressDetail>
                </AddressContainer>
                <PaymentContainer>
                    <PaymentTitle>Amount:</PaymentTitle>
                    <PaymentAmount>{((order.payment.amount) / 100).toFixed(2)} {(order.payment.currency).toUpperCase()}</PaymentAmount>
                </PaymentContainer>
                {/* <OrderStatus>{order.status || "unknown"}</OrderStatus> */}
                <OrderStatusContainer>
                    <OrderName>Status: {status}</OrderName>
                    <Select id="status" onChange={onStatusSelect} defaultValue={status}>
                        <Option value="new">New</Option>
                        <Option value="inProgress">In progress</Option>
                        <Option value="shipped">Shipped</Option>
                    </Select>
                </OrderStatusContainer>
            </InfoContainer>

        </Container>
    )
}

export default Order
