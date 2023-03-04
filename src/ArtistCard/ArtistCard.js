import React from "react";
import { Link } from "react-router-dom";
import "./ArtistCard.css";

const ArtistCard = ({ id, image, name, genre, rank }) => {
  return (
    <section className="card-container">
      <h2 className="artist-name-tag">{name}</h2>
      <img className="card-image" src={image} alt={`${name} - musician`} />
      <div className="card-styler">
        <p className="card-genre">{`Genre: ${genre}`}</p>
        <p className="card-rank">{`Rank: ${rank}`}</p>
      </div>
      <div className="lm-button">
        <Link key={id} to={`/${id}`} className="learn-more-button">
          <button className="learn-more">Learn More</button>
        </Link>
      </div>
    </section>
  );
};

export default ArtistCard;
