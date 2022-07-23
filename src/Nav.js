import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
function Nav({ page, setPage }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavLink to={"/community"}>공지사항</NavLink>
      <NavLink to={"/schedule"}>일정관리</NavLink>
      <NavLink to={"/todo"}>할일관리</NavLink>
      <NavLink to={"/memo"}>메모장</NavLink>
    </div>
  );
}

export default Nav;
