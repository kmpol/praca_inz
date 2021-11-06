import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    border-radius: 3px;
    flex-direction: column;
    background-color: #fff;
    max-width: 240px;
    max-height: 240px;
    margin: 10px 25px;
    cursor: pointer;
    text-decoration: none;
    color: black;
`
const Image = styled.img`
    height: 75%;
    object-fit: cover;
`

const InformationContainer = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    background-color: #f3f3f3;
`

const Product = ({ product }) => {
    const history = useHistory()
    const onClick = () => {
        history.push(`/product/${product._id}`)
    }
    return (
        <>

            <Container onClick={onClick}>
                <Image src={product.img} />
                <InformationContainer>
                    <p>{product.name}</p>
                    <p>Price: ${product.price}</p>
                    {!product.itemsInStock && <p>Not in stock</p>}
                </InformationContainer>
            </Container>
        </>
    )
}

export default Product
