import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ page, setPage }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavLink
        to={"/community"}
        onClick={() => {}}
        style={({ isActive }) => {
          if (isActive) {
            return setPage("공지사항");
          }
        }}
      >
        공지사항
      </NavLink>
      <NavLink
        to={"/schedule"}
        onClick={() => {}}
        style={({ isActive }) => {
          if (isActive) {
            return setPage("일정");
          }
        }}
      >
        일정관리
      </NavLink>
      <NavLink
        to={"/"}
        onClick={() => {}}
        style={({ isActive }) => {
          if (isActive) {
            return setPage("할일");
          }
        }}
      >
        할일관리
      </NavLink>
      <NavLink
        to={"/memo"}
        onClick={() => {}}
        style={({ isActive }) => {
          if (isActive) {
            return setPage("메모장");
          }
        }}
      >
        메모장
      </NavLink>
    </div>
  );
}

export default Nav;
