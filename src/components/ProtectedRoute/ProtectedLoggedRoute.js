import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedLoggedRoute = ({ isAutorized, children }) => {
  if (isAutorized) {
    return <Navigate to="/movies" replace />;
  }
  return children;
};