import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

const AccountPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getClientOrders())
    }, [])

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

                </ContentWrapper>
            </Wrapper>
        </Container >
    )
}

export default AccountPage