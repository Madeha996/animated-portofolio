import React from "react";
import "./Card.scss";

const Card = ({ image, title }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <div className="overlay">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
