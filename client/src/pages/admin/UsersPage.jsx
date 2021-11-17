import React from 'react'
import styled from 'styled-components'

import Sidebar from '../../components/admin/Sidebar'
import UserList from '../../components/admin/UserList'

const Container = styled.div`
    display: flex;
    width: 100%;
`

const UsersContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
`

const UsersPage = () => {
    return (
        <Container>
            <Sidebar />
            <UsersContainer>
                <UserList />
            </UsersContainer>
        </Container>
    )
}

export default UsersPage
