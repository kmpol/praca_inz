import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import ComplaintItem from './ComplaintItem'
import { getReturnsAdmin } from '../../actions/admin/returns'
import { getComplaintsAdmin } from '../../actions/admin/complaints'

const Container = styled.div`
    width: 100%;
`

const ComplaintsList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComplaintsAdmin())
    }, [])

    const complaints = useSelector(state => state.complaintsAdmin)
    console.log(complaints)

    return (
        <Container>
            {
                complaints?.length > 0 ? (
                    complaints.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1).map((item) => <ComplaintItem key={item._id} item={item} />)
                ) : (
                    "No complaints"
                )
            }
        </Container>
    )
}

export default ComplaintsList