import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserComplaints } from '../actions/complaints'
import ComplaintList from '../components/ComplaintList'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
    display: flex;
    height: calc(100vh - 64px);
`

const ContentWrapper = styled.div`
    display: flex;
    flex: 3;
`

const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const SideBarOption = styled(Link)`
    text-decoration: none;
    color: black;
    margin: 24px 12px;
    &:hover{
        color: gray;
    }
`

const AccountPageComplaints = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserComplaints())
    }, [])

    const complaints = useSelector(state => state.complaints)
    console.log(complaints)
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <SideBar>
                    <SideBarOption to="/account/orders">Orders</SideBarOption>
                    <SideBarOption to="/account/returns"> Returns</SideBarOption>
                    <SideBarOption to="/account/complaints">Complaints</SideBarOption>
                </SideBar>
                <ContentWrapper>
                    <ComplaintList complaints={complaints} />
                </ContentWrapper>
            </Wrapper>
        </Container >
    )
}

export default AccountPageComplaints