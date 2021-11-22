import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/admin/Sidebar'
import ProductForm from '../../components/admin/ProductForm'

const Container = styled.div`
    display: flex;
    width: 100%;
`

const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
`

const ProductsPageAdmin = () => {
    return (
        <Container>
            <Sidebar />
            <ProductsContainer>
                <ProductForm />
            </ProductsContainer>
        </Container>
    )
}

export default ProductsPageAdmin
