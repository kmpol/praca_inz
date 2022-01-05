import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import Navbar from '../components/Navbar'
import { getProduct, getProducts } from '../actions/products'
import { addProduct } from '../actions/cart'

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 85vh;
`

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px;
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const ProductName = styled.h2`
    margin: 24px 12px;
    display: flex;
    flex:1;
    align-items: center;
`

const ProductDescription = styled.p`
    margin: 24px 12px;
    flex: 3;
    display: flex;
    align-items: flex-start;
`

const ProductPrice = styled.p`
    margin: 24px 12px;
    flex: 1;
    align-items: flex-start;
`

const AddToCartButton = styled.button`
    padding: 16px 0px;
    width: 25%;
    background-color: #fff;
    cursor: pointer;
`

const Quantity = styled.input`
    width: 25%;
    margin: 12px 0px;
`

const ProductPage = () => {
    const cartFromStorage = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : {
            products: [],
            quantity: 0,
            total: 0
        }

    const dispatch = useDispatch()

    const [product, setProduct] = useState()
    const [quantityOfItem, setquantityOfItem] = useState(1)
    const [error, setError] = useState(false)

    const cart = cartFromStorage
    const cartRedux = useSelector(state => state.cart)

    const location = useLocation()
    const id = location.pathname.replace("/product/", "")

    useEffect(async () => {
        console.log('KOCHAM BEATKE')
        setProduct(await dispatch(getProduct(id)))
    }, [id])

    const onClickButton = (e) => {
        const payload = {
            product: { ...product, quantityOfItem: parseInt(quantityOfItem) },
            quantity: 1,
            total: (product.price * quantityOfItem)
        }

        if (!!cart.products.find((item) => item._id === product._id)) {
            return setError(true)
        }
        setError(false)
        dispatch(addProduct(payload))
    }

    return (
        <div>
            {product ? (
                <>
                    <Navbar />
                    <Container>
                        <ImageContainer>
                            <Image src={product.img} />
                        </ImageContainer>
                        <InfoContainer>
                            {
                                product?.isActiveSale ? (
                                    <>
                                        <ProductName>{product.name}</ProductName>
                                        <ProductDescription>{product.description}</ProductDescription>
                                        <ProductPrice>Price: <strong>${product.price}</strong></ProductPrice>
                                        Quantity:<Quantity onChange={(e) => setquantityOfItem(e.target.value)} value={quantityOfItem} />
                                        <AddToCartButton onClick={onClickButton}>ADD TO CART</AddToCartButton>
                                        {error && "Product already exists in the cart!"}
                                    </>
                                ) : (
                                    <>
                                        <ProductName>{product.name}</ProductName>
                                        <ProductDescription>{product.description}</ProductDescription>
                                        <ProductDescription>Product is not in sale currently!</ProductDescription>
                                    </>
                                )
                            }

                        </InfoContainer>
                    </Container >
                </>
            ) : (
                <h1>Loading...</h1>
            )
            }

        </div>
    )
}

export default ProductPage
