import React from "react";
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

function Nav() {
  return <NavBar></NavBar>;
}

export default Nav;
