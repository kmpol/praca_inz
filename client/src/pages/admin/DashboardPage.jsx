import React from 'react'
import styled from 'styled-components'

import Sidebar from '../../components/admin/Sidebar'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

const DashboardPage = () => {

    return (
        <Container>
            <Sidebar />
            <p>Dashboard</p>
        </Container>
    )
}

export default DashboardPage
