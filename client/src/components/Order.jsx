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

const ProductsWrapper = styled.div`
    display: flex;
    margin-top: 10px;
`
const ImageContainer = styled.div`
    width: 5vw;
    height: 5vw;
`
const OrderStatus = styled.p`
    font-weight: 600;
`

const ProductDetails = styled.p`
    display:flex;
    align-items:center;
    flex:1;
    justify-content: center;
    &:nth-child(2) {
        justify-content: flex-start;
        margin-left: 6px;
    }
`

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
`

const PriceInfo = styled.p`
    margin-top: 12px;
    font-weight: ${props => props.total ? 600 : ""};
`

const ButtonContainer = styled.div`
display: flex;
`

const Button = styled(Link)`
    text-decoration: none;
    color: black;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    transition: 0.4s;
        &:hover{
        background-color: black;
        color: white;
        cursor: pointer;
    }

`

const Order = ({ item }) => {
    console.log('ITEM', item)
    return (
        <Wrapper>
            <OrderStatus>status: {item.status}</OrderStatus>
            <OrderStatus>Purchase date: {moment(item.createdAt).format('DD-MM-YYYY h:m')}</OrderStatus>

            {
                item.products.map((product) => <ProductsWrapper>
                    <ImageContainer>
                        <ProductImage src={product.product.img} />
                    </ImageContainer>
                    <ProductDetails>{product.product.name}</ProductDetails>
                    <ProductDetails>{product.quantity} x</ProductDetails>
                    <ProductDetails>{product.product.price} USD</ProductDetails>
                    <ProductDetails>{product.quantity * product.product.price} USD</ProductDetails>
                </ProductsWrapper>)
            }
            <PriceInfo>Subtotal: {item.payment.amount / 100 - item.payment.shipping_amount / 100} USD</PriceInfo>
            <PriceInfo>Shipping: {item.payment.shipping_amount / 100} USD</PriceInfo>
            <PriceInfo total={true}>Total: {item.payment.amount / 100} USD</PriceInfo>
            <ButtonContainer>
                {
                    !item.has_returned && <Button to={`/account/returns/createReturn/${item._id}`}>Return</Button>
                }
                {
                    !item.has_complained && <Button to={`/account/complaints/createComplaint/${item._id}`}>Make Complaint</Button>

                }
            </ButtonContainer>
        </Wrapper>
    )
}

export default Order