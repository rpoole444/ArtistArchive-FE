import React from "react";
import "./ArtistCard.css";

const ArtistCard = ({ id, image, name, rank }) => {
  return (
    <section className="card-container">
      <h2>{name}</h2>
      <img className="card-image" src={image} alt={`${name} - musician`} />
      <p className="card-rank">{`Rank: ${rank}`}</p>
    </section>
  );
};

export default ArtistCard;
