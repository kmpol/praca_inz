import React from 'react'
import styled from 'styled-components'

import Sidebar from '../../components/admin/Sidebar'
import Filters from '../../components/admin/Filters'
import OrderList from '../../components/admin/OrderList'

const Container = styled.div`
    display: flex;
    width: 100%;
`

const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
`

const OrdersPage = () => {
    return (
        <Container>
            <Sidebar />
            <OrdersContainer>
                <Filters />
                <OrderList />
            </OrdersContainer>
        </Container>
    )
}

export default OrdersPage
