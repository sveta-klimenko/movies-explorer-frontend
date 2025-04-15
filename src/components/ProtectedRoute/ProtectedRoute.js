import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ isAutorized, children }) => {
  if (!isAutorized) {
    return <Navigate to="/" replace />};
  return children;
};