import React from 'react'
import moment from 'moment'

import styled from 'styled-components'

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

const ReturnItem = ({ item }) => {

    return (
        <Container>
            <DetailsWrapper>
                <ReturnDetail>{item._id}</ReturnDetail>
                <ReturnDetail>{moment(item.createdAt).format('DD-MM-YYYY')}</ReturnDetail>
            </DetailsWrapper>
        </Container >
    )
}

export default ReturnItem