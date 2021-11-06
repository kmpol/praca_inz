import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import Navbar from '../components/Navbar'
import { getProduct, getProducts } from '../actions/products'

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px;
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
    flex: 2;
    display: flex;
    align-items: flex-start;
`

const ProductPrice = styled.p`
    margin: 24px 12px;
    flex: 1;
    align-items: flex-start;
`

const ProductPage = () => {
    const dispatch = useDispatch()

    const location = useLocation()
    const id = location.pathname.replace("/product/", "")

    useEffect(() => {
        console.log('KOCHAM BEATKE')
        dispatch(getProducts())
    }, [])

    const products = useSelector(state => state.products)
    const product = products.find((product) => product._id === id)

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
                            <ProductName>{product.name}</ProductName>
                            <ProductDescription>{product.description}</ProductDescription>
                            <ProductPrice>Price: <strong>${product.price}</strong></ProductPrice>
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
