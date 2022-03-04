import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { updateReturnStatus } from '../../actions/admin/returns'

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    border: 1px solid gray;
`

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const ReturnDetail = styled.p`
    display: ${props => props.num === 0 ? 'none' : ''};
`
const ReturnStatusContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    margin-left: 10px;
`

const ReturnStatus = styled.h4`

`

const Select = styled.select`
    width: 50%;
`

const Option = styled.option``

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 600;
`

const ReturnItem = ({ item }) => {

    const dispatch = useDispatch()

    const onStatusSelect = (e) => {
        const status = e.target.value
        console.log(status)
        dispatch(updateReturnStatus(item._id, { status }))
    }

    console.log(item)

    return (
        <Container>
            <DetailsWrapper>
                <ReturnDetail>{item._id}</ReturnDetail>
                <ReturnDetail>{moment(item.createdAt).format('DD-MM-YYYY hh:mm')}</ReturnDetail>
                {
                    item.products.map((product) => {
                        return <ReturnDetail num={product.quantity}>Product(s): {product.product_id.name} x {product.quantity} ({product.product_id._id})</ReturnDetail>
                    })
                }
                Order id:
                <StyledLink to={`/admin/dashboard/orders/${item.original_order}`}>{item.original_order}</StyledLink>
            </DetailsWrapper>
            <ReturnStatusContainer>
                <ReturnStatus>Status: {item.status}</ReturnStatus>
                <Select id="status" onChange={onStatusSelect} defaultValue={item.status}>
                    <Option value="new">New</Option>
                    <Option value="under_consideration">under consideration</Option>
                    <Option value="accepted">accepted</Option>
                    <Option value="rejected">rejected</Option>
                </Select>
            </ReturnStatusContainer>
        </Container >
    )
}

export default ReturnItem