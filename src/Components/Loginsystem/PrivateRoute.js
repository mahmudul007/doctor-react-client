
import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ children, ...rest }) => {
    var token = null;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        token = obj.access_token.token;
    }


    return (
        <Route
            {...rest}
            render={({ location }) =>
                token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;