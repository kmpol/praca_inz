import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    padding: 10px;
    border: 1px solid gray;
    position: relative;
    display: flex;
    width: 100%;
`

const UserDetails = styled(Link)`
    display: flex;
    width: 100%;
    text-decoration: none;
    color: black;

    &:hover{
        font-weight: 600;
    }
`

const UserDetail = styled.p`
    flex: 1;
    display: flex;
    justify-content: center;
`

const User = ({ user, moneySpent }) => {
    return (
        <Container>
            <UserDetails to={`/admin/dashboard/users/${user._id}`}>
                <UserDetail>{user._id}</UserDetail>
                <UserDetail>{user.name}</UserDetail>
                <UserDetail>{user.email}</UserDetail>
                <UserDetail>{(user.isAdmin).toString()}</UserDetail>
                <UserDetail>{((moneySpent?.total) / 100) || "No orders"} {moneySpent && "USD"}</UserDetail>
            </UserDetails>
        </Container>
    )
}

export default User
