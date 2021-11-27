import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { createProduct } from '../../actions/products'
import ProductForm from '../../components/admin/ProductForm'
import Sidebar from '../../components/admin/Sidebar'

const Container = styled.div`
    display: flex;
    width: 100%;
`

const AddProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
`

const AddProductPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const onSaveClickAdd = (product) => {
        dispatch(createProduct(product, history))
    }

    return (
        <Container>
            <Sidebar />
            <AddProductContainer>
                <ProductForm productProp={undefined} onSaveClick={onSaveClickAdd} />
            </AddProductContainer>
        </Container>
    )
}

export default AddProductPage
