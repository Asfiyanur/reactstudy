import React from "react";
import "./Card.css";

const Card = ({ image, name, desc }) => {
  return (
    <div className="card">
      <img src={image} alt="" className="cardimg" />
      <h3 className="name">{name}</h3>
      <p className="desc">{desc}</p>
      <button className="button">Detail</button>
    </div>
  );
};

export default Card;
