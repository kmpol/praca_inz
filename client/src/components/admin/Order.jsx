import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { updateOrderStatus } from '../../actions/admin/orders'

const Container = styled.div`
    width: 100%;
    padding: 10px;
    border: 1px solid gray;
    position: relative;
`

const StyledLink = styled(Link)`
    position: absolute;
    top: 10px;
    left: 260px;
    cursor: pointer;
    text-decoration: none;
    color: black;

    &:hover{
        text-decoration: underline;
        color: gray;
    }
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

const Products = styled.div`
    flex: 2;
    
`

const ProductShortDesc = styled.p`
`

const ProductQuantity = styled.p``

const ProductName = styled.p``

const OrderStatusContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`

const OrderName = styled.h4`

`

const Select = styled.select`
    width: 50%;
`

const Option = styled.option``

const Order = ({ order, status, products }) => {

    const dispatch = useDispatch()

    const onStatusSelect = (e) => {
        const status = e.target.value
        dispatch(updateOrderStatus(status, order._id))
    }
    return (
        <Container>
            <OrderId>ID: {order._id}</OrderId>
            <OrderDate>{order.createdAt}</OrderDate>
            <StyledLink to={`/admin/dashboard/orders/${order._id}`}>Details</StyledLink>
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
                <Products>
                    {
                        products?.length > 0 ? (
                            products.map((product) => {
                                return (
                                    <div key={product._id}>
                                        <ProductName>{product.quantity}x {product.product.name} {product.product.gender} {product.product.size} {product.product.color} ({product.product._id})</ProductName>
                                    </div>
                                )
                            })
                        ) : (
                            "No products :( ?????"
                        )
                    }
                </Products>
                <OrderStatusContainer>
                    <OrderName>Status: {status}</OrderName>
                    <Select id="status" onChange={onStatusSelect} defaultValue={status}>
                        <Option value="new">New</Option>
                        <Option value="inProgress">In progress</Option>
                        <Option value="shipped">Shipped</Option>
                    </Select>
                </OrderStatusContainer>
            </InfoContainer>

        </Container >
    )
}

export default Order
