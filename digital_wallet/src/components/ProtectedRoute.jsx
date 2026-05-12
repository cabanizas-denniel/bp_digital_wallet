import React from "react";
import { Navigate, Outlet } from "react-router-dom";

/** Wrap nested routes; redirects to login when no session in localStorage. */
const ProtectedRoute = () => {
  const user = localStorage.getItem("user");
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
