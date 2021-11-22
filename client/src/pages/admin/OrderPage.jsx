import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../../actions/admin/orders'
import { useLocation } from 'react-router'

import Sidebar from '../../components/admin/Sidebar'


const Container = styled.div`
    display: flex;
    width: 100%;
`

const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
`

const OrderBasicInfo = styled.div`
    display: flex;
    padding: 10px;
    margin-bottom: 50px;
    border-bottom: 1px solid black;
`

const OrderID = styled.h3`
    flex:1;
    display: flex;
    justify-content: center;
`
const OrderDate = styled.h3`
    flex:1;
    display: flex;
    justify-content: center;
`
const OrderDetailsContainer = styled.div`
    display: flex;
`
const ProductsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const ProductsTitle = styled.h2`
    display: flex;
    justify-content: center;
`

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Product = styled.div`
    display: flex;
    margin-top: 33px;
`

const ProductImage = styled.img`
    width: 25%;
    min-width: 100px;
    object-fit: cover;
    margin-left: 10px;
`

const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`

const ProductTitle = styled.h3`
    flex: 1;
`

const ProductGender = styled.h4`
    flex: 1;
    font-weight: 500;

`

const ProductSize = styled.h4`
    flex: 1;
    font-weight: 500;

`

const ProductColor = styled.h4`
    flex: 1;
    font-weight: 500;

`
const ProductQuantity = styled.h4`
    flex: 1;
    font-weight: 500;
`

const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 33px;
`

const PaymentContainer = styled.div`
    margin-bottom: 33px;

`

const StatusContainer = styled.div`

`

const AddressDetail = styled.p`
    margin-left: 20px;
`

const AddressTitle = styled.h2`
    display: flex;
    justify-content: center;
    margin-bottom: 33px;
`

const Title = styled.h3`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
`

const PaymentDetail = styled.p`
    margin-left: 20px;
`
const StatusDetail = styled.p`
    margin-left: 20px;
`

const OrderPage = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const id = location.pathname.replace('/admin/dashboard/orders/', '')

    useEffect(() => {
        dispatch(getOrder(id))
    }, [])

    useEffect(() => {
        dispatch({ type: "CLEAR_ORDER" })
    }, [location])

    const order = useSelector(state => state.adminOrders)
    console.log(order)

    return (
        <Container>
            <Sidebar />
            <OrderContainer>
                {
                    order._id
                        ?
                        (
                            <>
                                <OrderBasicInfo>
                                    <OrderID>ID: {order._id}</OrderID>
                                    <OrderDate>Date: {order.createdAt}</OrderDate>
                                </OrderBasicInfo>
                                <OrderDetailsContainer>
                                    <ProductsContainer>
                                        <ProductsTitle>Products:</ProductsTitle>
                                        <ProductContainer>
                                            {
                                                order.products.map((product) => {
                                                    return (
                                                        <Product key={product._id}>
                                                            <ProductImage src={product.product.img} />
                                                            <ProductInfoContainer>
                                                                <ProductTitle>{product.product.name}</ProductTitle>
                                                                <ProductGender>{product.product.gender}</ProductGender>
                                                                <ProductSize>{product.product.size}</ProductSize>
                                                                <ProductColor>{product.product.color}</ProductColor>
                                                                <ProductQuantity>{product.quantity}pc(s)</ProductQuantity>
                                                            </ProductInfoContainer>
                                                        </Product>
                                                    )
                                                })
                                            }
                                        </ProductContainer>
                                    </ProductsContainer>
                                    <InfoContainer>
                                        <AddressContainer>
                                            <AddressTitle>Summary:</AddressTitle>
                                            <Title>address:</Title>
                                            <AddressDetail>{order.address.name}</AddressDetail>
                                            <AddressDetail>{order.address.line1}</AddressDetail>
                                            <AddressDetail>{order.address.line2}</AddressDetail>
                                            <AddressDetail>{order.address.postal_code} {order.address.city}</AddressDetail>
                                            <AddressDetail>{order.address.state}</AddressDetail>
                                            <AddressDetail>{order.address.country}</AddressDetail>
                                            <AddressDetail>email: {order.address.email}</AddressDetail>
                                        </AddressContainer>
                                        <PaymentContainer>
                                            <Title>payment:</Title>
                                            <PaymentDetail>{(order.payment.amount) / 100} {(order.payment.currency).toUpperCase()}</PaymentDetail>
                                        </PaymentContainer>
                                        <StatusContainer>
                                            <Title>status:</Title>
                                            <StatusDetail>{order.status}</StatusDetail>
                                        </StatusContainer>
                                    </InfoContainer>
                                </OrderDetailsContainer>

                            </>
                        )
                        :
                        ("Loading...")
                }
            </OrderContainer>
        </Container>
    )
}

export default OrderPage
