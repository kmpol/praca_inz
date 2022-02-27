import React from 'react'
import moment from 'moment'

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
`

const ReturnDetail = styled.p`

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

const ReturnItem = ({ item }) => {

    const dispatch = useDispatch()

    const onStatusSelect = (e) => {
        const status = e.target.value
        console.log(status)
        dispatch(updateReturnStatus(item._id, { status }))
    }

    return (
        <Container>
            <DetailsWrapper>
                <ReturnDetail>{item._id}</ReturnDetail>
                <ReturnDetail>{moment(item.createdAt).format('DD-MM-YYYY hh:mm')}</ReturnDetail>
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