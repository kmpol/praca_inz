import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'

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
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <SideBar>
                    <SideBarOption to="/account/orders">Orders</SideBarOption>
                    <SideBarOption to="/account/returns"> Returns</SideBarOption>
                    <SideBarOption to="/account/complaints">Complaints</SideBarOption>
                    <SideBarOption to="/account/passwordeset">Password reset</SideBarOption>
                </SideBar>
                <ContentWrapper>
                    PASSWORD RESET
                </ContentWrapper>
            </Wrapper>
        </Container >
    )
}

export default AccountPage