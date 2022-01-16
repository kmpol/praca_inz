import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import FileBase from 'react-file-base64'
import { getCategories } from '../../actions/admin/categories'

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

const ProductForm = ({ productProp, onSaveClick }) => {
    const [product, setProduct] = useState({
        name: productProp?.name ? productProp.name : '',
        description: productProp?.description ? productProp.description : '',
        mainCategory: productProp?.mainCategory ? productProp.mainCategory : '',
        gender: productProp?.gender ? productProp.gender : 'men',
        size: productProp?.size ? productProp.size : '',
        color: productProp?.color ? productProp.color : '',
        price: productProp?.price ? productProp.price : 0,
        img: productProp?.img ? productProp.img : ""
    })

    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    const categoriesName = categories.map((category) => category.name)

    console.log('GIGACHAD CONSOLE LOG', categories, categoriesName)

    useEffect(() => {
        dispatch(getCategories())
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
        const price = parseFloat(e.target.value)

        setProduct({
            ...product,
            price
        })
    }

    const onSaveClickButton = (e) => {
        e.preventDefault()
        onSaveClick(product)
        setProduct({})
    }

    console.log(product)
    return (
        <Container>
            Add product:
            <Form>
                <ProductsInput type="text" placeholder="Product name.." onChange={onProductNameChange} value={product.name} />
                <ProductsInput type="text" placeholder="Product description.." onChange={onProductDescriptionChange} value={product.description} />

                <ProductSelect name="mainCateogry" onChange={onCategoryChange} value={product.mainCategory} placeholder='Category name'>
                    {categoriesName.map((category) => <ProductOption key={category} value={category}>{category}</ProductOption>)}
                </ProductSelect>

                <ProductSelect name="gender" onChange={onGenderChange} value={product.gender}>
                    <ProductOption defaultChecked value="men" >Men</ProductOption>
                    <ProductOption value="women" >Women</ProductOption>
                </ProductSelect>

                <ProductsInput type="text" placeholder="Size" onChange={onSizeChange} value={product.size} />
                <ProductsInput type="text" placeholder="Color" onChange={onColorChange} value={product.color} />
                <ProductsInput type="number" placeholder="Price" onChange={onPriceChange} value={product.price} />
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setProduct({ ...product, img: base64 })}
                />

                <Button onClick={onSaveClickButton}>Save!</Button>
            </Form>
        </Container>
    )
}

export default ProductForm
