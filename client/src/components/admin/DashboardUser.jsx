import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Container = styled.div`
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
    justify-content: flex-start;
`
const UserDetailEmail = styled.p`
    flex:2;
    display: flex;
    margin-left: 10px;
    justify-content: flex-start;
`

const DashboardUser = ({ user }) => {
    return (
        <Container>
            <UserDetail>{user.name}</UserDetail>
            <UserDetailEmail>{user.email}</UserDetailEmail>
            <UserDetail>{moment(user.createdAt).format('YYYY-MM-DD')}</UserDetail>
        </Container>
    )
}

export default DashboardUser