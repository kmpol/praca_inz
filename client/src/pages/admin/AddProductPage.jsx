import React from 'react'
import styled from 'styled-components'
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
    return (
        <Container>
            <Sidebar />
            <AddProductContainer>
                <ProductForm />
            </AddProductContainer>
        </Container>
    )
}

export default AddProductPage
