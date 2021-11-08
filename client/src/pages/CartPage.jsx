import styled from 'styled-components'
import React from 'react'

import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Add, Remove } from '@material-ui/icons'

import { addQuantity, subtractQuantity } from '../actions/cart'

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

const MainContainer = styled.div`
    display: flex;
    padding: 16px;
`

const ItemListContainer = styled.div`
    flex: 3;
`

const SummaryContainer = styled.div`
    flex: 1;
`

const Product = styled.div`
    display: flex;
    width: 100%;
    height: 256px;
    border: 1px solid gray;
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

const CartPage = () => {
    let cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    console.log('CARTPAGE, CART', cart)

    const onAddClick = (id) => {
        dispatch(addQuantity(id))
    }

    const onSubtractClick = (id) => {
        dispatch(subtractQuantity(id))
    }

    return (
        <Container>
            <Navbar />
            <Title>Your cart</Title>
            <MainContainer>
                <ItemListContainer>
                    {
                        cart.products.length > 0 ? (
                            cart.products.sort((a, b) => a.price - b.price).map((product) => (
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
                                        <Amount>${product.quantityOfItem * product.price}</Amount>
                                    </PriceDetails>
                                </Product>
                            ))

                        ) : (
                            <p>Your cart is empty</p>
                        )
                    }
                </ItemListContainer>
                <SummaryContainer>

                </SummaryContainer>
            </MainContainer>

        </Container >
    )
}

export default CartPage
