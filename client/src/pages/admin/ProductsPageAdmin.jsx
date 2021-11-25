import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Sidebar from '../../components/admin/Sidebar'

import { getProducts } from '../../actions/products'
import Product from '../../components/admin/Product'
import { getOrders } from '../../actions/admin/orders'

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
    margin: 12px 0;
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
        dispatch(getOrders())
    }, [])

    const products = useSelector(state => state.products)
    const orders = useSelector(state => state.adminOrders)
    const productsIds = [...new Set(orders?.map((order) => order?.products.map((product) => product.product._id)).flat())]
    let sales = []


    //Just don't look at this
    for (let i = 0; i < productsIds.length; i++) {
        let product_id = productsIds[i];
        for (let j = 0; j < orders.length; j++) {

            for (let k = 0; k < orders[j].products.length; k++) {
                let order_product_id = orders[j].products[k].product._id
                let order_product_price = orders[j].products[k].product.price
                let order_product_quantity = orders[j].products[k].quantity

                if (product_id === order_product_id) {
                    sales.push({
                        product_id: order_product_id,
                        price: order_product_price,
                        quantity: order_product_quantity
                    })

                }
            }

        }
    }

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
                                    return <Product key={product._id} product={product} sales={sales.filter((sale) => sale.product_id === product._id)} />
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
