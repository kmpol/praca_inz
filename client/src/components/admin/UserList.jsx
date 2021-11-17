import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getUsers } from '../../actions/admin/users'
import User from './User'

const Container = styled.div`
    width: 100%;
`

const UserBar = styled.div`
    display: flex;
`

const UserColumn = styled.h3`
    flex:1;
    display: flex;
    justify-content: center;
`

const UserList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
        console.log("User list render")
    }, [])

    const adminUsers = useSelector(state => state.adminUsers)
    console.log(adminUsers)
    return (
        <Container>
            <UserBar>
                <UserColumn>User ID:</UserColumn>
                <UserColumn>User name:</UserColumn>
                <UserColumn>User email:</UserColumn>
                <UserColumn>is Admin:</UserColumn>
                <UserColumn>total money spent:</UserColumn>
            </UserBar>
            {
                adminUsers.length > 0 ? (
                    adminUsers.map((user) => {
                        return <User key={user._id} user={user} />
                    })
                ) : (
                    "No users :("
                )
            }
        </Container>
    )
}

export default UserList
