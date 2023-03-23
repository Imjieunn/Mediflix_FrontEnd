import React from "react";
import "../assets/styles/sidebar-left.css";
import { Link, useLocation } from "react-router-dom";
// import SidebarLeftItem from "./SidebarLeftItem";
import dashboardIcon from "../assets/imgs/dashboardicon.png";
import userIcon from "../assets/imgs/userIcon.png";
import contentIcon from "../assets/imgs/contentIcon.png";
import blackIcon from "../assets/imgs/blackicon.png";

function SidebarLeft() {

  const menus = [
    { name: "대시보드", path: "/", image: dashboardIcon },
    { name: "서비스 유저 관리", path: "/members", image: userIcon },
    { name: "콘텐츠 관리", path: "/cashes", image: contentIcon },
    { name: "연자/파트너 관리", path: "/partner", image: blackIcon }
  ];

  return (
    <nav class="menu-1">
      <ul>
        {menus.map((menu) => {
          return (
            <li><Link to={menu.path}><img src={menu.image} />{menu.name}</Link></li>)
        })}
      </ul>
    </nav>

  );
}

export default SidebarLeft;
