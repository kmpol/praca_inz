import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { getProducts } from '../actions/products'
import Product from './Product'
import selectProducts from '../selectors/products'
import { setColor, setGender, setMainCategory, setSize } from '../actions/filters'
import { useState } from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
`

const Products = () => {
    const [isHomePage, setIsHomePage] = useState(true)
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

    useEffect(() => {
        if (location.pathname === '/') {
            setIsHomePage(true)
        } else {
            setIsHomePage(false)
        }
    }, [location])

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
                        <Title>{isHomePage ? "Najnowsze produkty:" : "Products:"} </Title>
                        <Container>
                            <>
                                {isHomePage ? (
                                    selectProducts(products, filters).length > 0 ? (
                                        selectProducts(products, filters).slice(0, 10).sort((a, b) => a.createdAt > b.createdAt ? -1 : 1).map((product) => (
                                            <Product key={product._id} product={product} />
                                        ))
                                    ) : (
                                        "No products..."
                                    )
                                ) : (
                                    selectProducts(products, filters).length > 0 ? (
                                        selectProducts(products, filters).sort((a, b) => a.createdAt > b.createdAt ? -1 : 1).map((product) => (
                                            <Product key={product._id} product={product} />
                                        ))
                                    ) : (
                                        "No products..."
                                    )

                                )}

                            </>

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
