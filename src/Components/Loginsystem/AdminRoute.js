
import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const AdminRoute = ({ children, ...rest }) => {
    var token = null;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        token = obj.access_token.token;
    }
    var admin = null;
    if (localStorage.getItem('data')) {
        var obj = JSON.parse(localStorage.getItem('data'));
        if (obj.type === 'doctor') {
            admin = obj.type;
        }
    }



    return (
        <Route
            {...rest}
            render={({ location }) =>
                token && admin ? (
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

export default AdminRoute;