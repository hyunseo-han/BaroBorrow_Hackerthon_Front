import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavLink to={"/community"}>공지사항</NavLink>
      <NavLink to={"/schedule"}>일정관리</NavLink>
      <NavLink to={"/todo"}>할일관리</NavLink>
    </div>
  );
}

export default Nav;
