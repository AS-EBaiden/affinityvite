import React, { useState, useRef } from "react";
import { links } from "../Navigation/SideBarData";
import logo from "../../assets/CPimg.svg";
import UserPhoto from "./assets/user-photo.png";
import "../../components/Navigation/styles/SideBar.css";
import {
  CollapseLeft,
  CollapseRight,
} from "@allied-solutions/affinity-react-icons/dist/16px";

import { ButtonUnstyled, Collapse, Icon } from "@allied-solutions/affinity";

export default function Navigation({ activeBar, setActiveBar }) {
  //
  //   const [activeBar, setActiveBar] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  return (
    <aside className={`sidebar ${activeBar && "active"}`}>
      <header className="header">
        <figure className="logo-container">
          <img
            className="logo"
            src={logo}
            alt="logo"
            style={{ filter: "invert(1)" }}
          />
        </figure>

        <ButtonUnstyled
          icon="CollapseLeft"
          className="toggle-sidebar-btn"
          onClick={() => setActiveBar(!activeBar)}
        >
          <Icon src={activeBar ? CollapseRight : CollapseLeft} color="white" />
        </ButtonUnstyled>
      </header>

      <ul className="list-items">
        {links.map(({ title, icon, link }, index) => (
          <li key={index} className="item">
            <a className="link" href={link}>
              <figure className="link-icon">{icon}</figure>
              <span className="link-name">{title}</span>
            </a>
            <span className="tooltip">{title}</span>
          </li>
        ))}
      </ul>

      <button className="logout-btn">
        <figure className="user-photo-container">
          <img className="user-photo" src={UserPhoto} alt="" />
        </figure>
        <div className="user-name-wrapper">
          <span className="user-name">Prem Shahi</span>
          |||
        </div>
      </button>
    </aside>
  );
}
