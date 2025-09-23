// Card.jsx
import React from "react";

const Card = ({ title, description, image }) => { 
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{description}</p>
      <img className="image" src={image} alt={title} />
    </div>
  );
};

export default Card;
