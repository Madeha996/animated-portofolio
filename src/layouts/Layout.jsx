import React, { useState } from "react";
import LeftSider from "./left-sider/LeftSider";
import RightSider from "./right-sider/RightSider";
import { AnimatePresence, motion } from "framer-motion";
import Services from "../pages/services/index";
import Portofolio from "../pages/portofolio/index";
import About from "../pages/about/index";
import Contact from "../pages/contact/index";
import "./layout.scss";

const pageVariants = {
  open: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  closed: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.6, ease: "easeIn" },
  },
};

const Layout = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const handleLinkClick = (page) => {
    if (activePage === page) {
      setActivePage(null);
    } else {
      setActivePage(page);
    }
  };

  return (
    <div className="layout">
      <LeftSider
        isOpen={isLeftOpen}
        toggle={() => setIsLeftOpen(!isLeftOpen)}
      />
      <main className="main-content">
        <AnimatePresence mode="wait">
          {!activePage && (
            <motion.div
              key="welcome"
              initial="closed"
              animate="open"
              exit="closed"
              variants={pageVariants}
            >
              <h1 className="text-4xl font-bold">Welcome</h1>
            </motion.div>
          )}

          {activePage && (
            <motion.div
              key={activePage}
              initial="closed"
              animate="open"
              exit="closed"
              variants={pageVariants}
              style={{
                backgroundColor: "rebeccapurple !important",
                width: "100%",
                height: "100%",
              }}
            >
              {activePage === "services" && <Services />}
              {activePage === "portofolio" && <Portofolio />}
              {activePage === "about" && <About />}
              {activePage === "contact" && <Contact />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <RightSider onLinkClick={handleLinkClick} />
    </div>
  );
};

export default Layout;
