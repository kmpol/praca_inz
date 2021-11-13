import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { getOrders } from '../../actions/admin/orders'
import Order from './Order'
import OrderSelector from '../../selectors/orders'

const Container = styled.div`
    width: 100%;
`

const OrderList = () => {
    const filters = useSelector(state => state.filterOrders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrders())
        console.log("Order list render")
    }, [])

    const adminOrders = useSelector(state => state.adminOrders)

    return (
        <Container>
            {
                adminOrders.length > 0 ? (
                    OrderSelector(adminOrders, { ...filters }).map((order) => {
                        return <Order key={order._id} order={order} status={order.status} />
                    })
                ) : (
                    "No orders"
                )
            }
        </Container>
    )
}

export default OrderList
