import React from "react";
import { Navigate } from "react-router-dom";
import WithUser from "./WithUser";

function AuthRoute({user,children }) {
    if (user) {
        return <Navigate to="/dashboard" replace />;
    }
    return children;
}

export default WithUser(AuthRoute);