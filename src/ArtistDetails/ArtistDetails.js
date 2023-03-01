import React, { useState, useEffect } from "react";
import "./ArtistDetails.css";
import { retrieveSingleArtist } from "../apiCalls";
import { NavLink, Link } from "react-router-dom";
// import ErrorModal from "../ErrorHandling/ErrorModal";

const ArtistDetails = (props) => {
  const [artist, setArtist] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getArtist = () => {
    setLoading(true);
    retrieveSingleArtist(props)
      .then((artistData) => {
        setArtist(artistData);
        setLoading(false);
      })
      .catch((error) => setError({ error: error.message }));
  };
  useEffect(() => {
    getArtist();
  });
  const { name, genre, video, description } = artist;
  // const errorModal = error ? <ErrorModal message={error} /> : null;
  return (
    <section className="artist-details">
      <section className="artist-container">
        <h1 className="artist-name">{name}</h1>
        <section className="artist-video">
          {video ? (
            <iframe
              src={`https://www.youtube.com/embed/${video}`}
              allowFullScreen
              title="video"
              width="85%"
              height="90%"
            ></iframe>
          ) : (
            <div>No Video Available</div>
          )}
        </section>
        <section className="details-container">
          <p>{`Genre: ${genre}`}</p>
          <article className="bio">{description}</article>
        </section>
        <section className="buttons-container">
          <NavLink to="/">
            <button className="home-button">Back Home</button>
          </NavLink>
          <NavLink to="/favorites">
            <button className="favorites-button">To Favorites</button>
          </NavLink>
        </section>
      </section>
    </section>
  );
};

export default ArtistDetails;
