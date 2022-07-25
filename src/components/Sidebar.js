import "./Sidebar.scss";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="profile-image">
        <img className="profile" alt="profile" src="img/profile.png"></img>
        <img className="profile1" alt="profile1" src="img/profile1.png"></img>
      </div>
      <div className="profile2">
        <p className="text1">
          김멋사<p className="text2">님</p>
        </p>
      </div>

      <div className="content1">
        <img className="noti" alt="noti" src="img/noti.png"></img>
        <p className="text-al1">
          <Link to={"/community"}>공지사항 </Link>
        </p>
      </div>

      <div className="content2">
        <img className="calendar" alt="calendar" src="img/calendar.png"></img>
        <p className="text-al2">
          <Link to={"/schedule"}>일정관리 </Link>
        </p>
      </div>
      <div className="content3">
        <img className="Todoi" alt="Todoi" src="img/Todoi.png"></img>
        <p className="text-al3">
          <Link to={"/todo"}>할일관리</Link>
        </p>
      </div>
      <div className="content4">
        <img className="outi" alt="outi" src="img/outi.png"></img>
        <p className="text-al4">로그아웃</p>
      </div>
    </div>
  );
};

export default Sidebar;
