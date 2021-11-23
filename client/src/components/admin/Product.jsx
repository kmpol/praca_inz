import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    padding: 12px;
    border-bottom: 1px solid black;
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

const SalesContainer = styled.div`
    flex:1;
`

const ActionContainer = styled.div`
    flex:1;
`

const Product = ({ product }) => {
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
            <PriceContainer>{(product.price).toFixed(2)}</PriceContainer>
            <DetailsContainer>test</DetailsContainer>
            <SalesContainer>test</SalesContainer>
            <ActionContainer>test</ActionContainer>
        </Container>
    )
}

export default Product
