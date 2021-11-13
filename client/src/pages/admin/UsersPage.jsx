import React from 'react'
import styled from 'styled-components'

import Sidebar from '../../components/admin/Sidebar'

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`

const UsersPage = () => {
    return (
        <Container>
            <Sidebar />
            <p>Users</p>
        </Container>
    )
}

export default UsersPage
