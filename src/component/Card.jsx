import React from "react";
import "./Card.css";
const Card = ({ src, title, icon }) => {
  return (
    <div className="cardContainer">
      <img src={src} alt="Transaction Image" />
      <div className="titleContainer">
        <p>{title}</p>
        <div className="iconContainer">{icon}</div>
      </div>
    </div>
  );
};

export default Card;
