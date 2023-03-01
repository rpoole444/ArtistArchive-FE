import React from "react";
import "./ArtistCard.css";

const ArtistCard = ({ id, image, name, genre, rank }) => {
  return (
    <section className="card-container">
      <h2>{name}</h2>
      <img className="card-image" src={image} alt={`${name} - musician`} />
      <div className="card-styler">
        <p className="card-genre">{`Genre: ${genre}`}</p>
        <p className="card-rank">{`Rank: ${rank}`}</p>
      </div>
    </section>
  );
};

export default ArtistCard;
