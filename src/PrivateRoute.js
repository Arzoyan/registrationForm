import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    ...rest
}) => {
    return (
        <Route {...rest} component={(props) =>
            !!window.localStorage.getItem("token") ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/login" />
                )
        } />
    )
}
export default PrivateRoute;