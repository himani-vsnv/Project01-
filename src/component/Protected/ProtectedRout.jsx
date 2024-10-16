import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouting = () => {
  const tokens = localStorage.getItem("token");
  return tokens ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouting;