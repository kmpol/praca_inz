import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Container = styled(Link)`
    width: 100%;
    padding: 10px;
    display: flex;
    width: 100%;
    text-decoration: none;
    color: black;
`

const UserDetail = styled.p`
    flex:1;
    display: flex;
    margin-left: 10px;
`

const DashboardUser = ({ user }) => {
    return (
        <Container to={`/admin/dashboard/users/${user._id}`}>
            <UserDetail>{user.name}</UserDetail>
            <UserDetail>{user.email}</UserDetail>
            <UserDetail>{moment(user.createdAt).format('YYYY-MM-DD')}</UserDetail>
        </Container>
    )
}

export default DashboardUser