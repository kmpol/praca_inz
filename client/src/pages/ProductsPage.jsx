import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import Filters from '../components/Filters'
import Products from '../components/Products'

const Container = styled.div`

`

const ProductsPage = () => {

    return (
        <Container>
            <Navbar />
            <Filters />
            <Products />
        </Container>
    )
}

export default ProductsPage
