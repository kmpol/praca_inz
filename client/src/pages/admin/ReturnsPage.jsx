import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../../components/admin/Sidebar'
import { getReturnsAdmin } from '../../actions/admin/returns'
import ReturnList from '../../components/admin/ReturnList'

const Container = styled.div`
    display: flex;
    width: 100%;
`

const ReturnsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
`

const ReturnsPage = () => {

    return (
        <Container>
            <Sidebar />
            <ReturnsContainer>
                <ReturnList />
            </ReturnsContainer>
        </Container>
    )
}

export default ReturnsPage