import React from "react";
import "./rightSider.scss";
import { Link } from "react-router";

const RightSider = () => {
  return (
    <div className="right-sider">
      <Link to="/portoflio">PORTOFOLIO</Link>
      <Link to="/services">SERVICES</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTACT</Link>
    </div>
  );
};

export default RightSider;
