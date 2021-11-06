import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import FileBase from 'react-file-base64'
import { createProduct } from '../actions/products'

const Container = styled.div`
    background-color: #dbdbdb;
    display: flex;
    margin: 0 10vw;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

const ProductsInput = styled.input`
    padding: 10px;
    font-size: 16px;
    width: 50%;
    margin-bottom: 12px;
`

const Button = styled.button`
    width: 50%;
    background-color: #2da04a;
    border: none;
    height: 32px;
    cursor: pointer;
`

const ProductSelect = styled.select`
    width: 50%;
    height: 32px;
    margin-bottom: 12px;
`

const ProductOption = styled.option`
`

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        mainCategory: '',
        gender: 'men',
        size: '',
        color: '',
        price: 0,
        img: '',
        itemsInStock: 0
    })

    const dispatch = useDispatch()

    useEffect(() => {

    }, [])

    const onProductNameChange = (e) => {
        const name = e.target.value
        setProduct({
            ...product,
            name
        })
    }
    const onProductDescriptionChange = (e) => {
        const description = e.target.value
        setProduct({
            ...product,
            description
        })
    }

    const onCategoryChange = (e) => {
        const category = e.target.value
        const mainCategory = category
        setProduct({
            ...product,
            mainCategory
        })
    }

    const onGenderChange = (e) => {
        const gender = e.target.value
        setProduct({
            ...product,
            gender
        })
    }

    const onSizeChange = (e) => {
        const size = e.target.value
        setProduct({
            ...product,
            size
        })
    }

    const onColorChange = (e) => {
        const color = e.target.value
        setProduct({
            ...product,
            color
        })
    }

    const onPriceChange = (e) => {
        const price = e.target.value

        setProduct({
            ...product,
            price
        })
    }

    const onItemsInStockChange = (e) => {
        const itemsInStock = e.target.value
        setProduct({
            ...product,
            itemsInStock
        })
    }

    const onSaveClick = (e) => {
        e.preventDefault()

        dispatch(createProduct(product))

        setProduct({})
    }

    console.log(product)
    return (
        <Container>
            Add product:
            <Form>
                <ProductsInput type="text" placeholder="Product name.." onChange={onProductNameChange} />
                <ProductsInput type="text" placeholder="Product description.." onChange={onProductDescriptionChange} />
                <ProductsInput type="text" placeholder="Main category" onChange={onCategoryChange} />

                <ProductSelect name="gender" onChange={onGenderChange} >
                    <ProductOption defaultChecked value="men" >Men</ProductOption>
                    <ProductOption value="women" >Women</ProductOption>
                </ProductSelect>

                <ProductsInput type="text" placeholder="Size" onChange={onSizeChange} />
                <ProductsInput type="text" placeholder="Color" onChange={onColorChange} />
                <ProductsInput type="number" placeholder="Price" onChange={onPriceChange} />
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setProduct({ ...product, img: base64 })}
                />
                <ProductsInput type="number" placeholder={"Items in stock"} onChange={onItemsInStockChange} />

                <Button onClick={onSaveClick}>Save!</Button>
            </Form>
        </Container>
    )
}

export default ProductForm
