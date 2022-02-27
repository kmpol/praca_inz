import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
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

const Sidebar = () => {
    return (
        <Container>
            <SideBar>
                <SideBarOption to="/account/orders">Orders</SideBarOption>
                <SideBarOption to="/account/returns"> Returns</SideBarOption>
                <SideBarOption to="/account/complaints">Complaints</SideBarOption>
            </SideBar>
        </Container>
    )
}

export default Sidebar