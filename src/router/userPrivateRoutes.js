import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const {token} = useSelector((state) => state.authSaga);
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
