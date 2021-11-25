import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    padding: 12px;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
`

const OfferContainer = styled.div`
    flex: 2;
    display: flex;
`

const ImageContainer = styled.div`
    flex: 1;
    overflow: hidden;

`

const Image = styled.img`
    width: 100%;
    object-fit: fill;
`

const TitleContainer = styled.div`
    flex:2;
`

const Title = styled.h4`
    margin-left: 6px;
`

const AvailabilityContainer = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PriceContainer = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DetailsContainer = styled.div`
    flex:1;

`

const ProductDetails = styled.p``

const SalesContainer = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
`

const SalesDetail = styled.p`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ActionContainer = styled.div`
    flex:1;
`

const Product = ({ product, sales }) => {
    const quantitySales = sales.map((sale) => sale.quantity).reduce((a, b) => a + b, 0)
    const priceSales = sales.map((sale) => sale.price).reduce((a, b) => a + b, 0)
    return (
        <Container>
            <OfferContainer>
                <ImageContainer>
                    <Image src={product.img} />
                </ImageContainer>
                <TitleContainer>
                    <Title>{product.name}</Title>
                </TitleContainer>
            </OfferContainer>
            <AvailabilityContainer>{product.itemsInStock}</AvailabilityContainer>
            <PriceContainer>{(product.price).toFixed(2)} USD</PriceContainer>
            <DetailsContainer>
                <ProductDetails><strong>gender:</strong> {product.gender}</ProductDetails>
                <ProductDetails><strong>category:</strong> {product.mainCategory}</ProductDetails>
                <ProductDetails><strong>size:</strong> {product.size}</ProductDetails>
                <ProductDetails><strong>color:</strong> {product.color}</ProductDetails>
            </DetailsContainer>
            <SalesContainer>
                <SalesDetail>{priceSales.toFixed(2)} USD</SalesDetail>
                <SalesDetail>{quantitySales.toFixed(0)} pc(s)</SalesDetail>
            </SalesContainer>
            <ActionContainer>test</ActionContainer>
        </Container>
    )
}

export default Product
