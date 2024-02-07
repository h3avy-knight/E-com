import React from "react";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const { loggedInUser } = useSelector((e) => e.ComponentPropsManagement);
  console.log("LOGGED", loggedInUser);

  if (!loggedInUser) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return children;
}

export default Protected;
