import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    width: 20vw;
    height: 100%;
    background-color: #082032;
`

const LinkContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    text-decoration: none;

    color: white;
    margin: 8px 24px;
    padding: 3px;

    &:hover{
        color: #bbb
    }
`


const Sidebar = () => {
    return (
        <Container>
            <LinkContainer>
                <StyledLink to="/admin/dashboard">Dashboard</StyledLink>
                <StyledLink to="/admin/dashboard/orders">Orders</StyledLink>
                <StyledLink to="/admin/dashboard/users">Users</StyledLink>
            </LinkContainer>
        </Container>
    )
}

export default Sidebar
