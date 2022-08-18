import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function RouteLogin() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default RouteLogin;
