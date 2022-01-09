import React, { useState } from 'react'
import styled from 'styled-components'

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


const SliderForm = ({ categoryProp, onSaveClick }) => {
    const [category, setCategory] = useState({
        name: categoryProp?.name ? categoryProp.name : '',
    })
    const [displayError, setDisplayError] = useState(false)

    const onSaveClickButton = (e) => {
        e.preventDefault()
        if (category.name) {
            setDisplayError(false)
            onSaveClick(category)
            setCategory({
                name: ""
            })
        } else {
            setDisplayError(true)
        }
    }

    return (
        <Container>
            Add category:
            <Form>
                <ProductsInput type="text" placeholder="Category name.." onChange={(e) => setCategory({ ...category, name: e.target.value })} value={category.name} />
                <Button onClick={onSaveClickButton}>Save!</Button>
                {displayError && "Please provide a category name"}
            </Form>
        </Container>
    )
}

export default SliderForm
