import React from "react";
import { Route, Redirect } from "react-router-dom";


//Step 1d: Build a `PrivateRoute` component and use it to protect a route that renders the `BubblesPage` component


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem("token")) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};

export default PrivateRoute;