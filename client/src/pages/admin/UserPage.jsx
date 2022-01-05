import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import moment from 'moment'

import Sidebar from '../../components/admin/Sidebar'
import { getUser } from '../../actions/admin/users'
import { getClientOrdersxD } from '../../actions/admin/orders'
import { Link } from 'react-router-dom'

import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    BarChart,
    Bar
} from 'recharts'

const Container = styled.div`
    display: flex;
    width: 100%;
`

const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
    padding: 0px 12px;
`

const User = styled.div`
    display: flex;
`

const UserDetail = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.5rem;
`

const Orders = styled.div`
    display: flex;
    flex-direction: column;
`

const Order = styled(Link)`
    display: flex;
    justify-content: space-between;
    color: black;
    text-decoration: none;

    &:hover{
        font-weight: 600;
    }
`

const OrderTitle = styled.h3``
const OrderDetail = styled.p`

`

const UserPage = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const id = location.pathname.replace('/admin/dashboard/users/', '')
    const currentYear = moment().get('year')

    useEffect(() => {
        dispatch(getUser(id))
        dispatch(getClientOrdersxD(id))
    }, [id])
    console.log(id)

    useEffect(() => {
        dispatch({ type: "CLEAR_ORDER" })
    }, [location])

    const obj = useSelector(state => state.adminUsers)
    const data = useSelector(state => state.stats.clientOrders)

    let dataLastYear = data.filter((item) => {
        return item._id.includes(currentYear - 1)
    }).map((item) => {
        return {
            _id: item._id,
            total: item.total / 100
        }
    })

    let dataCurrentYear = data.filter((item) => {
        return item._id.includes(currentYear)
    }).map((item) => {
        return {
            _id: item._id,
            total: item.total / 100
        }
    })

    //yes, yes, I know that
    const Chart = ({ data }) => (
        <ResponsiveContainer width={`${data.length * 10}%`} height={400} >
            <BarChart data={data}>
                <Tooltip />
                <Bar dataKey="total" stroke="#082032" fill="#082032" />
                <XAxis dataKey="_id" />
                <YAxis dataKey="total" />
            </BarChart>
        </ResponsiveContainer >
    )

    return (
        <Container>
            <Sidebar />
            {
                obj.user ? (
                    <UserContainer>
                        <User>
                            <UserDetail>User: {obj.user.name} - {obj.user.email} ({obj.user._id})</UserDetail>
                        </User>
                        <Orders>
                            <OrderTitle>User orders:</OrderTitle>
                            {
                                obj.ordersFromUser.length > 0 ? (
                                    obj.ordersFromUser.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1).map((order) => (
                                        <Order key={order._id} to={`/admin/dashboard/orders/${order._id}`}>
                                            <OrderDetail>{order._id} </OrderDetail>
                                            <OrderDetail>{(order.payment.amount) / 100} {order.payment.currency}</OrderDetail>
                                            <OrderDetail>{order.createdAt.substr(0, 10)}</OrderDetail>
                                        </Order>
                                    ))
                                ) : (
                                    "User has no orders"
                                )
                            }
                            {
                                <>
                                    <h2>{!!dataCurrentYear.length && "Current year:"}</h2>
                                    <Chart data={dataCurrentYear} />
                                    <h2>{!!dataLastYear.length && "Last year:"}</h2>
                                    <Chart data={dataLastYear ? dataLastYear : null} />
                                </>
                            }
                        </Orders>
                    </UserContainer>
                ) : (
                    "Loading..."
                )
            }
        </Container>
    )
}

export default UserPage
