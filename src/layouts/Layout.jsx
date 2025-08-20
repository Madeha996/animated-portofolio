import React, { useState } from "react";
import LeftSider from "./left-sider/LeftSider";
import RightSider from "./right-sider/RightSider";
import "./layout.scss";

const Layout = ({ children }) => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);

  return (
    <div className="layout">
      <LeftSider
        isOpen={isLeftOpen}
        toggle={() => setIsLeftOpen(!isLeftOpen)}
      />
      <main className="main-content">{children || <h1>Main Content</h1>}</main>
      <RightSider />
    </div>
  );
};

export default Layout;
