import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../../components/admin/Sidebar'
import ComplaintsList from '../../components/admin/ComplaintsList'

const Container = styled.div`
    display: flex;
    width: 100%;
`

const ComplaintsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
`

const ComplaintsPage = () => {

    return (
        <Container>
            <Sidebar />
            <ComplaintsContainer>
                <ComplaintsList />
            </ComplaintsContainer>
        </Container>
    )
}

export default ComplaintsPage