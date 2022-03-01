import React from 'react'
import styled from 'styled-components'
import ComplaintItem from './ComplaintItem'


const Wrapper = styled.div`
    display:flex;
    flex-direction: column;

`

const ComplaintList = ({ complaints }) => {
    return (
        <Wrapper>
            {
                complaints.length === 0 ? (
                    "No complaints..."
                ) : (
                    complaints.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1).map((complaint) => <ComplaintItem key={complaint._id} item={complaint} />)
                )
            }
        </Wrapper>
    )
}

export default ComplaintList