import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import "./leftSider.scss";
import Footer from "../../components/footer/Footer";
import SocialLinks from "../../components/social-links/SocialLinks";

const linkVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.15 },
  }),
};

const footerVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.5 } },
};

const LeftSider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSider = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className={`left-sider ${!isOpen ? "collapsed" : "open"}`}
      animate={{ width: isOpen ? 424 : 81 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }} // فتح أبطأ
    >
      {!isOpen && (
        <>
          <div className="img-container">
            <img alt="logo" src="" />
          </div>

          <div className="toggle-btn" onClick={toggleSider}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <SocialLinks />
        </>
      )}

      {isOpen && (
        <>
          <div className="close-btn" onClick={toggleSider}>
            <IoMdClose />
          </div>

          <ul className="links">
            {["HOME", "PORTOFOLIO", "CONTACT"].map((link, i) => (
              <motion.li
                key={link}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                {link}
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="footer-wrapper"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.5,
            }}
          >
            <Footer />
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default LeftSider;
