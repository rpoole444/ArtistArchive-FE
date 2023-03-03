import React, { useState, useEffect } from "react";
import "./ArtistDetails.css";
import { retrieveSingleArtist } from "../apiCalls";
import { NavLink } from "react-router-dom";
// import ErrorModal from "../ErrorHandling/ErrorModal";

const ArtistDetails = (props) => {
  const [artist, setArtist] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorited, setFavorited] = useState(false);

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
  }, []);

  useEffect(() => {
    for (let el of props.favorites) {
      if (el.id === artist.id) {
        setFavorited(true);
      }
    }
  }, [props.favorites, artist.id]);
  const handleAdd = () => {
    props.setFavorites((favorites) => {
      return [...favorites, artist];
    });
    setFavorited(true);
  };

  const handleDelete = () => {
    setFavorited(false);
    const filtered = props.favorites.filter((el) => {
      return el.id !== artist.id;
    });
    props.setFavorites(filtered);
  };

  const { name, genre, video, description } = artist;
  // const errorModal = error ? <ErrorModal message={error} /> : null;
  return (
    <section className="artist-details">
      <section className="artist-container">
        <div className="to-faves">
          <NavLink exact to="/favorites">
            <button className="favorites-button">To Favorites</button>
          </NavLink>
        </div>
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
          {favorited ? (
            <button className="unfavorite-button" onClick={handleDelete}>
              Remove from Favorites
            </button>
          ) : (
            <button className="favorites-button" onClick={handleAdd}>
              Add to Favorites
            </button>
          )}
        </section>
      </section>
    </section>
  );
};

export default ArtistDetails;
