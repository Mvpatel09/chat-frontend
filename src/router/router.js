import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Dashboard from "../components/dashboard/Dashboard";
import PrivateRoutes from "./userPrivateRoutes";

const history = createBrowserHistory();

export default function AllRoutes() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
