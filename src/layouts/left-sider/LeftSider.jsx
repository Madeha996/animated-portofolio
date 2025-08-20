import React, { useState } from "react";
import { motion } from "framer-motion";
import "./leftSider.scss";

const LeftSider = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSider = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="left-sider"
      animate={{ width: isOpen ? 300 : 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Toggle Button */}
      {!isOpen && (
        <div className="toggle-btn" onClick={toggleSider}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      )}

      {/* Close Button */}
      {isOpen && (
        <div className="close-btn" onClick={toggleSider}>
          X
        </div>
      )}

      {/* Links */}
      {isOpen && (
        <ul className="links">
          <li>Home</li>
          <li>Portfolio</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
      )}
    </motion.div>
  );
};

export default LeftSider;
