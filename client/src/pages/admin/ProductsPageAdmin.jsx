import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Sidebar from '../../components/admin/Sidebar'

import { getProducts } from '../../actions/products'
import Product from '../../components/admin/Product'

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

const ProductListFilterContainer = styled.div`

`

const ProductListContainer = styled.div`

`

const ProductListTitle = styled.h2`
    display: flex;
    justify-content: center;
    padding: 24px 0;
    border-bottom: 1px solid black;
`

const ProductList = styled.div`
    display: flex;
    flex-direction: column;
`
const ProductBar = styled.div`
    display: flex;
    margin-bottom: 12px;
`

const UserColumnOffer = styled.h3`
    flex:2;
    display: flex;
    justify-content: center;
`

const UserColumn = styled.h3`
    flex:1;
    display: flex;
    justify-content: center;
`

const ProductsPageAdmin = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const products = useSelector(state => state.products)

    console.log(products)
    return (
        <Container>
            <Sidebar />
            <ProductsContainer>

                <ProductListFilterContainer>

                </ProductListFilterContainer>
                <ProductListContainer>
                    <ProductListTitle>Products in your shop:</ProductListTitle>
                    <ProductList>
                        <ProductBar>
                            <UserColumnOffer>offer</UserColumnOffer>
                            <UserColumn>pieces / availability</UserColumn>
                            <UserColumn>price</UserColumn>
                            <UserColumn>details</UserColumn>
                            <UserColumn>sales total</UserColumn>
                            <UserColumn>action</UserColumn>
                        </ProductBar>
                        {
                            products.length > 0 ? (
                                products.map((product) => {
                                    return <Product key={product._id} product={product} />
                                })
                            ) : (
                                "No products :("
                            )
                        }
                    </ProductList>
                </ProductListContainer>
            </ProductsContainer>
        </Container>
    )
}

export default ProductsPageAdmin
