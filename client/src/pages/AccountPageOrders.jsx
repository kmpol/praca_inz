import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import OrderList from '../components/OrderList'
import { getClientOrders } from '../actions/orders'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
    display: flex;
    height: calc(100vh - 64px);
`

const ContentWrapper = styled.div`
    display: flex;
    flex: 3;
`

const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const SideBarOption = styled(Link)`
    text-decoration: none;
    color: black;
    margin: 24px 12px;
    &:hover{
        color: gray;
    }
`

const AccountPageOrders = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getClientOrders())
    }, [])

    const orders = useSelector(state => state.orders)

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <SideBar>
                    <SideBarOption to="/account/orders">Orders</SideBarOption>
                    <SideBarOption to="/account/returns"> Returns</SideBarOption>
                    <SideBarOption to="/account/complaints">Complaints</SideBarOption>
                </SideBar>
                <ContentWrapper>
                    {/* Sorting in order to show the client his orders in chronological order */}
                    <OrderList orders={orders.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)} />
                </ContentWrapper>
            </Wrapper>
        </Container >
    )
}

export default AccountPageOrders