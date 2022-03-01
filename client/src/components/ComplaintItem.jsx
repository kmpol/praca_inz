import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 12px;
    width: 50vw;
    padding: 10px 10px 0px 10px;
    margin-top: 12px;
`

const ComplaintDetail = styled.p`
    font-weight: 600;
`

const UserComplaint = styled.textarea`
    width: 100%;
    margin: 10px 0px;
    height: 20vh;
    resize: none;
`


const ComplaintItem = ({ item }) => {
    return (
        <Wrapper>
            <ComplaintDetail>Complaint date: {moment(item.createdAt).format('DD-MM-YYYY hh:mm')}</ComplaintDetail>
            <ComplaintDetail>Your complaint:</ComplaintDetail>
            <UserComplaint disabled={true} defaultValue={item?.user_complaint}></UserComplaint>
            <ComplaintDetail>Shop response:</ComplaintDetail>
            {item?.admin_response ? item?.admin_response : "Shop has not responded yet"}
        </Wrapper>
    )
}

export default ComplaintItem