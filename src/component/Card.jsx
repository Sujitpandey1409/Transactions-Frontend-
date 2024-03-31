import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
const Card = ({ src, title, icon, link }) => {
  const navigate = useNavigate()
  return (
    <div className="cardContainer" onClick={()=>navigate('/transfer')}>
      <img src={src} alt="Transaction Image" />
      <div className="titleContainer">
        <p>{title}</p>
        <div className="iconContainer">{icon}</div>
      </div>
    </div>
  );
};

export default Card;
