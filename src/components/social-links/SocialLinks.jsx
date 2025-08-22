import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import "./SocialLinks.scss";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialLinks;
