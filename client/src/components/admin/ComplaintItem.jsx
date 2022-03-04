import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { createRespond } from '../../actions/admin/complaints'

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    border: 1px solid gray;
`

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ReturnDetail = styled.p`

`

const ComplaintInput = styled.textarea`
    min-height: 15vh;
`

const ComplaintButton = styled.button`
    background-color: black;
    color: white;
    border: none;
    padding: 10px 0;
    margin: 10px 0;
    cursor: pointer;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 600;
`

const ReturnItem = ({ item, id }) => {
    const dispatch = useDispatch()

    const [response, setResponse] = useState()

    useEffect(() => {
        setResponse(item.admin_response)
    }, [item])

    const onResponseChange = (e) => {
        setResponse(e.target.value)
    }

    const onResponseClick = (e) => {
        dispatch(createRespond({ "admin_response": response }, id))
    }

    console.log(response)

    return (
        <Container>
            <DetailsWrapper>
                <ReturnDetail>{item._id}</ReturnDetail>
                <ReturnDetail>{moment(item.createdAt).format('DD-MM-YYYY')}</ReturnDetail>
                ORDER: <StyledLink to={`/admin/dashboard/orders/${item.original_order}`}>{item.original_order}</StyledLink>
                USER: <ReturnDetail>{item.user_complaint}</ReturnDetail>
                SHOP: <ReturnDetail>{item.admin_response}</ReturnDetail>
                <ComplaintInput onChange={onResponseChange} value={response} />
                <ComplaintButton onClick={onResponseClick}>Send!</ComplaintButton>
            </DetailsWrapper>
        </Container >
    )
}

export default ReturnItem