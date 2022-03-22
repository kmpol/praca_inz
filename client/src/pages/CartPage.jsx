import styled from 'styled-components'
import React from 'react'

import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useEffect } from 'react'
import { Add, Remove } from '@material-ui/icons'

import { addQuantity, subtractQuantity, clearCart } from '../actions/cart'
import { useState } from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    padding: 24px;
    font-weight: 300;
    font-size: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
`

const ClearCart = styled.p`
    padding: 10px;
    cursor: pointer;
`

const MainContainer = styled.div`
    display: flex;
    padding: 16px;
`

const ItemListContainer = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    width: 100%;
    height: 256px;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
`

const Image = styled.img`
    object-fit: cover;
    height: 100%;
    flex: 1;
    overflow: hidden;
`

const InfoContainer = styled.div`
    flex: 2;
`

const ProductTitle = styled.p`
    padding: 32px 8px;
    
`

const ProductId = styled.p`
    padding: 8px;
`

const ProductColor = styled.p`
    padding: 8px;
`

const ProductSize = styled.p`
    padding: 8px;
`

const ProductGender = styled.p`
    padding: 8px;
`

const PriceDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const QuantityContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1;
`

const QuantityTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex:1;
    font-size: 24px;
`

const ProductQuantity = styled.p`
    padding: 10px;
    font-size: 24px;

`

const Amount = styled.p`
    display: flex;
    justify-content: center;
    flex:1;
    font-size: 24px;

`

const SummaryContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 40vh;
    margin: 0 8px;
    border-radius: 5px;
`

const SummaryTitle = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 300;
    font-size: 36px;
    margin-bottom: 32px;
`

const ProductsTotalItem = styled.div`
    display: flex;
    width: 100%;
`

const ProductsTotalText = styled.p`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    margin-left: 32px;

    font-weight: 500;
    font-size: 24px;
`

const ProductsTotalPrice = styled.p`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-right: 32px;

    font-weight: 300;
    font-size: 24px;
`

const CheckoutButton = styled.button`
    margin: 24px 32px;
    padding: 10px 0px;
    background-color: #000;
    border: none;
    color: white;
    cursor: pointer;
`

const CartPage = () => {

    const [error, setError] = useState(false)

    const cartFromStorage = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : {
            products: [],
            quantity: 0,
            total: 0
        }

    // let cart = useSelector(state => state.cart)
    const cart = cartFromStorage
    const cartRedux = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const history = useHistory()

    console.log('CARTPAGE, CART LOCALSTORAGE', cart)
    console.log('CARTPAGE, CART REDUX', cartRedux)

    const onAddClick = (id) => {
        dispatch(addQuantity(id))
    }

    const onSubtractClick = (id) => {
        dispatch(subtractQuantity(id))
    }

    const onClearCartClick = () => {
        dispatch(clearCart())
    }

    const onCheckoutClick = (e) => {
        if (cart.products.length < 1) {
            return setError(true)
        } else {
            history.push('/checkout')
        }
    }

    return (
        <Container>
            <Navbar />
            <Title>Your cart</Title>
            <ClearCart onClick={onClearCartClick}>Clear the cart</ClearCart>
            <MainContainer>
                <ItemListContainer>
                    {
                        cart?.products?.length > 0 ? (
                            cart.products.sort((a, b) => a.name >= b.name ? -1 : 1).map((product) => (
                                <Product key={product._id}>
                                    <Image src={product.img} />
                                    <InfoContainer>
                                        <ProductTitle><strong>Product:</strong> {product.name}</ProductTitle>
                                        <ProductId><strong>ID:</strong> {product._id}</ProductId>
                                        <ProductColor><strong>Color:</strong> {product.color}</ProductColor>
                                        <ProductSize><strong>Size:</strong> {product.size}</ProductSize>
                                        <ProductGender><strong>Gender:</strong> {product.gender}</ProductGender>
                                    </InfoContainer>
                                    <PriceDetails>
                                        <QuantityTitle>Quantity:</QuantityTitle>
                                        <QuantityContainer>
                                            <Remove onClick={() => { onSubtractClick(product._id) }} />
                                            <ProductQuantity>{product.quantityOfItem}</ProductQuantity>
                                            <Add onClick={() => { onAddClick(product._id) }} />
                                        </QuantityContainer>
                                        <Amount>${(product.quantityOfItem * product.price).toFixed(2)}</Amount>
                                    </PriceDetails>
                                </Product>
                            ))

                        ) : (
                            <p>Your cart is empty</p>
                        )
                    }
                </ItemListContainer>
                <SummaryContainer>
                    <SummaryTitle>SUMMARY</SummaryTitle>
                    <ProductsTotalItem>
                        <ProductsTotalText>Total:</ProductsTotalText>
                        <ProductsTotalPrice>${(cart?.total).toFixed(2)}</ProductsTotalPrice>
                    </ProductsTotalItem>
                    <CheckoutButton onClick={onCheckoutClick}>Checkout</CheckoutButton>
                    {error && "Your cart is empty!"}
                </SummaryContainer>
            </MainContainer>

        </Container >
    )
}

export default CartPage
