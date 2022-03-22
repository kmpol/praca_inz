import React from 'react'
import { useState } from 'react'
import { Route, Redirect } from 'react-router'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [admin, setAdmin] = useState(JSON?.parse(localStorage?.getItem('profile'))?.user?.isAdmin)

    return (
        <Route {...rest} component={(props) => (
            admin ? (
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
        )} />
    )
}

export default PrivateRoute