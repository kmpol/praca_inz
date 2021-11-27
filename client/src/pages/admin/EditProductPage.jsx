import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { getProductToEdit, updateProduct } from '../../actions/products'
import ProductForm from '../../components/admin/ProductForm'
import Sidebar from '../../components/admin/Sidebar'

const Container = styled.div`
    display: flex;
    width: 100%;
`

const EditProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
`
// dodac route w react router -> edytowac productform
const EditProductPage = () => {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const id = location.pathname.replace('/admin/dashboard/products/editProduct/', '')
    useEffect(() => {
        dispatch(getProductToEdit(id))
    }, [])

    useEffect(() => {
        dispatch({ type: "CLEAR_PRODUCT" })
    }, [location])

    const product = useSelector(state => state.adminProducts.product)
    console.log(product)

    const onSaveClickEdit = (product) => {
        dispatch(updateProduct(id, product, history))
    }

    return (
        <Container>
            <Sidebar />
            <EditProductContainer>
                {
                    product.name ? (
                        <ProductForm productProp={product} onSaveClick={onSaveClickEdit} />
                    ) : (
                        <h2>Loading...</h2>
                    )
                }
            </EditProductContainer>
        </Container>
    )
}

export default EditProductPage
