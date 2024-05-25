import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import { Navigate } from "react-router-dom";

export default function privateRoutes() {
  const { token } = useAuth();
  if (!token || token === "") {
    return <Navigate to="/login"></Navigate>;
  }

  return <Outlet />;
}
