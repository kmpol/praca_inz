import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { getProducts } from '../actions/products'
import Product from './Product'
import selectProducts from '../selectors/products'
import { setColor, setGender, setMainCategory, setSize } from '../actions/filters'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const Products = () => {
    const dispatch = useDispatch()
    const location = useLocation()


    useEffect(() => {
        dispatch(getProducts())
        if (location.pathname === '/') {
            dispatch(setGender(""))
            dispatch(setSize(""))
            dispatch(setColor(""))
            dispatch(setMainCategory(""))
        }

    }, [])

    const products = useSelector(state => state.products)
    const filters = useSelector(state => state.filters)

    useEffect(() => {
        selectProducts(products, filters)
    }, [filters])

    return (
        <>
            {
                products ? (
                    <>
                        <h2>Products:</h2>
                        <Container>
                            {

                                selectProducts(products, filters).length > 0 ? (
                                    selectProducts(products, filters).map((product) => (
                                        <Product key={product._id} product={product} />
                                    ))
                                ) : (
                                    "No products..."
                                )
                            }
                        </Container>
                    </>

                ) : (
                    <h1>Loading...</h1>
                )
            }
        </>
    )
}

export default Products
