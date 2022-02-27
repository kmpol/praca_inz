import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const ProductsWrapper = styled.div`
    display: flex;
    margin-top: 10px;
`

const ImageContainer = styled.div`
width: 5vw;
height: 5vw;
`

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
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

const Select = styled.select`
    width: 25%;
`


const Option = styled.option``

const Button = styled.button`
    width:25%;  
    border:none;
    background-color: white;
    text-decoration: none;
    color: black;
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
    &:disabled{
        display: none;
    }
`

const ReturnProductItem = ({ product, quantity, setItems, items }) => {

    const [disableSelect, setDisableSelect] = useState(false)
    const [productToReturn, setProductToReturn] = useState({
        product_id: product._id,
        quantity: 0
    })

    const handleSelectChange = (e) => {
        setProductToReturn({
            ...productToReturn,
            id: product._id,
            quantity: parseInt(e.target.value)
        })
    }

    const handleClick = () => {
        setDisableSelect(true)
        setItems([
            ...items,
            productToReturn
        ])
    }

    console.log(productToReturn)
    return (
        <Container>
            <ProductsWrapper>
                <ImageContainer>
                    <ProductImage src={product.img} />
                </ImageContainer>
                <ProductDetails>{product.name}, you have ordered {quantity} pc(s)</ProductDetails>
                <Button disabled={disableSelect} onClick={handleClick}>confirm</Button>
                <Select id="status" onChange={(e) => { handleSelectChange(e) }} disabled={disableSelect}>
                    {[...new Array(quantity + 1)].map((x, i) => <Option>{i}</Option>)}
                </Select>
            </ProductsWrapper>
        </Container>
    )
}
export default ReturnProductItem