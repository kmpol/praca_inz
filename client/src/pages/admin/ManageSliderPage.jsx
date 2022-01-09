import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/admin/Sidebar'

import SliderList from '../../components/admin/SliderList'

const Container = styled.div`
    display: flex;
    width: 100%;
`

const ManageSliderPage = () => {
    return (
        <Container>
            <Sidebar />
            <SliderList />
        </Container>
    )
}

export default ManageSliderPage
