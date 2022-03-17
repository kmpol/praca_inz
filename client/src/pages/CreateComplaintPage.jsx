import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import OrderList from '../components/OrderList'
import ReturnProductItem from '../components/ReturnProductItem'
import { getClientOrders, hasComplained, hasReturned } from '../actions/orders'
import { createReturn } from '../actions/returns'
import { createComplaint } from '../actions/complaints'
import { getShopConfig } from '../api'

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
    flex-direction: column;
    flex: 2;
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
const Button = styled.button`
    width: 100%;
    border:none;
    background-color: white;
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    transition: 0.4s;
    margin-top: 12px;
    &:hover{
        background-color: black;
        color: white;
        cursor: pointer;
    }
    &:disabled{
        display: none;
    }
`

const OrderDetail = styled.p`
    margin: 10px 0px;
`

const UserComplaint = styled.textarea`
    width: 100%;
    margin: 10px 0px;
    height: 50vh;
    resize: none;
`

const InfoContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 10px;
`

const InfoTitle = styled.h2`
    display: flex;
    justify-content: center;
    margin: 10vh 0 3vh 0;
`

const InfoDetail = styled.p`
`

const AddressTitle = styled.h2`
    margin: 5vh 0 3vh 0;
    display: flex;
    justify-content: center;
`

const AddressName = styled.p`
    font-weight: 600;
`
const AddressDetail = styled.p``

const AddressContainer = styled.div`
    display: flex;
`
const AddressZip = styled.p``

const CreateReturnPage = () => {
    const [userComplaint, setUserComplaint] = useState("")
    const [error, setError] = useState("")
    const [config, setConfig] = useState("")
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()
    const id = location.pathname.replace('/account/complaints/createComplaint/', '')

    useEffect(() => {
        dispatch(getClientOrders())
        getShopConfig().then((res) => {
            setConfig(res.data)
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    const orders = useSelector(state => state.orders)
    const order = orders.find((order) => order._id === id)


    const onButtonClick = () => {
        if (userComplaint) {
            setError(false)
            dispatch(createComplaint(userComplaint, id, history))
            dispatch(hasComplained(id, history))
        }
        setError(true)
    }

    const onTextChange = (e) => {
        const message = e.target.value
        setUserComplaint(message)
    }

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
                    <OrderDetail>ID: {order?._id}</OrderDetail>
                    <OrderDetail>Purchase date: {moment(order?.createdAt).format('DD-MM-YYYY hh:mm')}</OrderDetail>
                    <UserComplaint inputMode='textarea' onChange={(e) => onTextChange(e)} />
                    <Button onClick={onButtonClick}>Send!</Button>
                    {
                        error && "Please, fill the form"
                    }
                </ContentWrapper>
                <InfoContainer>
                    <InfoTitle>Pamiętaj!</InfoTitle>
                    <InfoDetail>W reklamacji dodaj informacje o dacie usterki, opisie usterki, gdzie ona się znajduje. Wyślij nam paczkę na poniszy adres z dopiskiem "reklamacja"</InfoDetail>
                    <AddressTitle>Adres do reklamacji</AddressTitle>
                    <AddressName>{config?.shop_address ? config.shop_address.name : "Loading..."}</AddressName>
                    <AddressDetail>{config?.shop_address ? config.shop_address.line1 : "Loading..."}</AddressDetail>
                    {config?.shop_address?.line2 && "" && <AddressDetail>{config?.shop_address.line2}</AddressDetail>}
                    <AddressContainer>
                        <AddressDetail>{config?.shop_address ? config.shop_address.zip : "Loading..."} {config?.shop_address ? config.shop_address.city : "Loading..."}</AddressDetail>
                    </AddressContainer>
                </InfoContainer>
            </Wrapper>
        </Container >
    )
}

export default CreateReturnPage