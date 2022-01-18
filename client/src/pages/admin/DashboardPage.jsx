import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import Sidebar from '../../components/admin/Sidebar'
import { getAdminStatsLast7Days, getAdminStatsLast30Days, getAdminStatsLast7DaysOrders, getAdminStatsLast30DaysOrders } from '../../actions/admin/stats'

import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    BarChart,
    AreaChart,
    Area,
    Bar
} from 'recharts'
import { getProducts } from '../../actions/products'
import { getOrders } from '../../actions/admin/orders'
import { getUsers } from '../../actions/admin/users'
import productsSales from '../../selectors/productSales'
import Product from '../../components/admin/Product'
import OrderSmall from '../../components/admin/OrderSmall'
import DashboardUser from '../../components/admin/DashboardUser'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
    background-color: #c4c4c4;
`

const Wrapper = styled.div`
    display: flex;
    flex: 1;
`

const SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #ffffff;
    margin: 10px 10px 10px 10px;
    padding: 10px;
`

const SmallContainerTitle = styled.h3`
    display: flex;
    align-items: center;
    justify-content: flex-strat;
    flex: 3;
`

const Select = styled.select`
    display: flex;
    width: 25%;
    height: 36px;
    margin: auto auto;
`

const Option = styled.option``

const SmallContainerHeaderContainer = styled.div`
    flex: 1;
    display: flex;
`

const SmallContainerContentContainer = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: space-between;
`

const StatusContainer = styled.div`
    display: flex;
    margin-top: 5%;
    border-bottom: 1px solid black;
`

const StatusTitle = styled.p`
        display: flex;
        flex: 1;
    align-items: center;
    justify-content: flex-start;
`

const StatusNumber = styled.p`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`

const MediumContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    background-color: #ffffff;
    margin: 10px;
`

const TitleMediumContainer = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
`

//yes, yes, I know that
const ChartBar = ({ data }) => (
    <ResponsiveContainer width={`100%`} height={`100%`} >
        <AreaChart data={data}>
            <Tooltip />
            <Area dataKey="total" stroke="#082032" fill="#78a9cf" />
            <XAxis dataKey="_id" />
            <YAxis dataKey="total" />
        </AreaChart>
    </ResponsiveContainer >
)

const DashboardPage = () => {
    const dispatch = useDispatch()
    const [days, setDays] = useState(7)

    useEffect(() => {
        dispatch(getAdminStatsLast7Days())
        dispatch(getAdminStatsLast30Days())
        dispatch(getAdminStatsLast7DaysOrders())
        dispatch(getAdminStatsLast30DaysOrders())
        dispatch(getProducts())
        dispatch(getOrders())
        dispatch(getUsers())
    }, [])

    // const products = useSelector(state => state.products)
    const orders = useSelector(state => state.adminOrders)
    const users = useSelector(state => state.adminUsers)
    console.log(users)

    const stats7DaysOrders = useSelector(state => state.stats.last7DaysOrders)
    const stats30DaysOrders = useSelector(state => state.stats.last30DaysOrders)
    const stats7DaysOrdersNumber = useSelector(state => state.stats.last7DaysOrders).map((item) => item.total).reduce((a, b) => a + b, 0)
    const stats30DaysOrdersNumber = useSelector(state => state.stats.last30DaysOrders).map((item) => item.total).reduce((a, b) => a + b, 0)

    const stats7Days = useSelector(state => state.stats.last7Days).map((item) => {
        return {
            _id: item._id,
            total: item.total / 100
        }
    })
    const stats30Days = useSelector(state => state.stats.last30Days).map((item) => {
        return {
            _id: item._id,
            total: item.total / 100
        }
    })

    const amount7Days = useSelector(state => state.stats.last7Days).map((item) => item?.total / 100).reduce((a, b) => a + b, 0)
    const amount30Days = useSelector(state => state.stats.last30Days).map((item) => item.total / 100).reduce((a, b) => a + b, 0)



    // const sales = productsSales(products, orders)
    // console.log(sales)

    const onDaysSelect = (e) => {
        setDays(e.target.value)
    }


    return (
        <Container>
            <Sidebar />
            <DashboardContainer>
                <Wrapper>
                    <SmallContainer>
                        <SmallContainerHeaderContainer>
                            <SmallContainerTitle>Sales: last {days} days</SmallContainerTitle>
                            <Select onChange={onDaysSelect} defaultValue={days}>
                                <Option value={7}>7 days</Option>
                                <Option value={30}>30 days</Option>
                            </Select>
                        </SmallContainerHeaderContainer>
                        <SmallContainerContentContainer>
                            {
                                days == 7 ? (
                                    <>
                                        {stats7DaysOrders.map((status) => {
                                            return <StatusContainer key={status._id}>
                                                <StatusTitle>{status._id}:</StatusTitle>
                                                <StatusNumber>{status.total}</StatusNumber>
                                            </StatusContainer>
                                        })}
                                        <StatusContainer>
                                            <StatusTitle>Total orders:</StatusTitle>
                                            <StatusNumber>{stats7DaysOrdersNumber}</StatusNumber>
                                        </StatusContainer>
                                        <StatusContainer>
                                            <StatusTitle>Total amount:</StatusTitle>
                                            <StatusNumber>{amount7Days} USD</StatusNumber>
                                        </StatusContainer>
                                    </>
                                ) : (
                                    <>
                                        {stats30DaysOrders.map((status) => {
                                            return <StatusContainer key={status._id}>
                                                <StatusTitle>{status._id}:</StatusTitle>
                                                <StatusNumber>{status.total}</StatusNumber>
                                            </StatusContainer>
                                        })}
                                        <StatusContainer>
                                            <StatusTitle>Total orders:</StatusTitle>
                                            <StatusNumber>{stats30DaysOrdersNumber}</StatusNumber>
                                        </StatusContainer>
                                        <StatusContainer>
                                            <StatusTitle>Total amount:</StatusTitle>
                                            <StatusNumber>{amount30Days} USD</StatusNumber>
                                        </StatusContainer>
                                    </>
                                )
                            }
                        </SmallContainerContentContainer>
                    </SmallContainer>
                    <MediumContainer>
                        <TitleMediumContainer>Sales: last {days} days</TitleMediumContainer>
                        {
                            days == 7 ? (
                                <ChartBar data={stats7Days} />
                            ) : (
                                <ChartBar data={stats30Days} />
                            )
                        }
                    </MediumContainer>
                </Wrapper>
                <Wrapper>
                    <SmallContainer>
                        <SmallContainerHeaderContainer>
                            <SmallContainerTitle>Newest orders</SmallContainerTitle>
                        </SmallContainerHeaderContainer>
                        <SmallContainerContentContainer>
                            {
                                orders.length > 0 ? (
                                    orders.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1).slice(0, 8).map((order) => {
                                        return <OrderSmall key={order._id} order={order} />
                                    })
                                ) : (
                                    "Loading.."
                                )

                            }
                        </SmallContainerContentContainer>
                    </SmallContainer>
                    <SmallContainer>
                        <SmallContainerHeaderContainer>
                            <SmallContainerTitle>Newest users</SmallContainerTitle>
                        </SmallContainerHeaderContainer>
                        <SmallContainerContentContainer>
                            {
                                users.length > 0 ? (
                                    users.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1).slice(0, 5).map((user) => {
                                        return <DashboardUser user={user} />
                                    })
                                ) : (
                                    "Loading.."
                                )

                            }
                        </SmallContainerContentContainer>
                    </SmallContainer>
                </Wrapper>
            </DashboardContainer>
        </Container>
    )
}

export default DashboardPage
