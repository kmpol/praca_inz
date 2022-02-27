import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import OrderList from '../components/OrderList'
import ReturnProductItem from '../components/ReturnProductItem'
import { getClientOrders, hasReturned } from '../actions/orders'
import { createReturn } from '../actions/returns'

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
const Button = styled.button`
    width:100%;  
    border:none;
    background-color: black;
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    transition: 0.4s;
    margin-top: 12px;
    &:hover{
        background-color: white;
        color: black;
        cursor: pointer;
    }
    &:disabled{
        display: none;
    }
`

const CreateReturnPage = () => {
    const [items, setItems] = useState([])
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const id = location.pathname.replace('/account/returns/createReturn/', '')

    useEffect(() => {
        dispatch(getClientOrders())
    }, [])

    const orders = useSelector(state => state.orders)
    const order = orders.find((order) => order._id === id)

    const length = order?.products.length

    const handleButtonClick = (e) => {
        const totalReturnedItems = items.reduce((a, b) => a.quantity + b.quantity)
        if (totalReturnedItems === 0) {
            return setError(true)
        } else {
            dispatch(createReturn(items, id))
            dispatch(hasReturned(id, history))

        }

        // console.log(items)
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
                    {
                        order?.products.map((product) => <ReturnProductItem id={product._id} product={product.product} quantity={product.quantity} setItems={setItems} items={items} />)
                    }
                    <Button disabled={length === items.length ? false : true} onClick={(e) => { handleButtonClick(e) }}>Create return</Button>
                    {error && "You can not return 0 items, please refresh the page and try again!"}
                </ContentWrapper>

            </Wrapper>
        </Container >

    )
}

export default CreateReturnPage