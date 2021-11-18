import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding: 10px;
    border: 1px solid gray;
    position: relative;
    display: flex;
    width: 100%;
`

const UserDetails = styled.div`
    display: flex;
    width: 100%;
`

const UserDetail = styled.p`
    flex: 1;
    display: flex;
    justify-content: center;
`

const User = ({ user, moneySpent }) => {
    console.log(moneySpent)
    return (
        <Container>
            <UserDetails>
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
