import React from "react";
import "./explorecard.css";

const NewPlaceCard = ({ image, title, description }) => {
  return (
    <div className="explore-card">
      <img src={image} alt={title} className="explore-image" />
      <div className="explore-content">
        <h3 className="explore-title">{title}</h3>
        <p className="explore-description">{description}</p>
      </div>
    </div>
  );
};

export default NewPlaceCard;
