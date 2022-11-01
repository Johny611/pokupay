import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  let token = sessionStorage.getItem("Auth token");

  if (window.location.pathname === "/profile" && !token) {
    return <Navigate to="/auth" />;
  }
  return children;
};

export default Protected;
