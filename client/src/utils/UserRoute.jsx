import React from 'react'
import { useState } from 'react'
import { Route, Redirect } from 'react-router'

const UserRoute = ({ component: Component, ...rest }) => {
    const [user, setUser] = useState(JSON?.parse(localStorage?.getItem('profile'))?.user)

    return (
        <Route {...rest} component={(props) => (
            user ? (
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
        )} />
    )
}

export default UserRoute