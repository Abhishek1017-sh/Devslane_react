import React from "react";
import { Navigate } from "react-router-dom";
import WithUser from "./WithUser";

function UserRoutes({user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default WithUser(UserRoutes);