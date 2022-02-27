import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import ReturnItem from './ReturnItem'
import { getReturnsAdmin } from '../../actions/admin/returns'

const Container = styled.div`
    width: 100%;
`

const ReturnList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReturnsAdmin())
    }, [])

    const returns = useSelector(state => state.returnsAdmin)
    console.log(returns)

    return (
        <Container>
            {
                returns?.length > 0 ? (
                    returns.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1).map((item) => <ReturnItem key={item._id} item={item} />)
                ) : (
                    "No returns"
                )
            }
        </Container>
    )
}

export default ReturnList