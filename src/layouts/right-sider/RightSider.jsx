import React from "react";
import { Link } from "react-router";
import "./rightSider.scss";

const RightSider = ({ onLinkClick }) => {
  return (
    <nav className="right-sider">
      <ul>
        <li onClick={() => onLinkClick("services")}>SERVICES</li>
        <li onClick={() => onLinkClick("portofolio")}>PORTOFOLIO</li>
        <li onClick={() => onLinkClick("about")}>ABOUT</li>
        <li onClick={() => onLinkClick("contact")}>CONTACT</li>
      </ul>
    </nav>
  );
};

export default RightSider;
