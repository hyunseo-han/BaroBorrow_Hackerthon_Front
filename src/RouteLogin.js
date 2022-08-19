import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import style from "styled-components";

const NavBar = style.div`
  background: #56AEDF;
  height: 52px;
  position: fixed;
  width: 100%;
  z-index: 98;
  top: 0;
  left: 0;
`;

const NavBarText = style.span`
  
`;

function Nav({ navtext }) {
  return (
    <NavBar>
      <NavBarText>{navtext}</NavBarText>
    </NavBar>
  );
}

function RouteLogin() {
  return (
    <>
      <Nav />
      {true ? <Outlet /> : "잘못된 요펑"}
      {/* <Outlet /> */}
    </>
  );
}

export default RouteLogin;
