import React, { useState, useEffect } from "react";
import "./ArtistDetails.css";
import { retrieveSingleArtist } from "../apiCalls";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import ErrorPage from "../ErrorHandling/ErrorPage";

const ArtistDetails = (props) => {
  const [artist, setArtist] = useState({});
  const [, setError] = useState("");
  const [favorited, setFavorited] = useState(false);
  const [isFetching, setFetch] = useState(false)

  const { artistID, favorites, setFavorites } = props;

  useEffect(() => {
    
    const getArtist = () => {
    retrieveSingleArtist(artistID)
      .then((artistData) => {
        setArtist(artistData);
      })
      .catch((error) => setError({ error: error.message }));
  };
    if(!isFetching){
      setFetch(true)
      getArtist();
    } 
  }, [isFetching, artistID]);

  useEffect(() => {
    for (let el of favorites) {
      if (el.id === artist.id) {
        setFavorited(true);
      }
    }
  }, [favorites, artist.id]);

  const handleAdd = () => {
    setFavorites((prevFavorites) => {
      return [...prevFavorites, artist];
    });
    setFavorited(true);
  };

  const handleDelete = () => {
    setFavorited(false);
    const filtered = favorites.filter((el) => {
      return el.id !== artist.id;
    });
    setFavorites(filtered);
  };

  const { name, genre, video, description } = artist;

  return artist.name ? (
    <section className="artist-details">
      <section className="artist-container">
        <div className="to-faves">
          <NavLink exact to="/favorites" >
            <button className="favorites-button">To Favorites</button>
          </NavLink>
          <div className="title-container">
            <h1 className="artist-name">{name}</h1>
          </div>
        </div>
        <section className="artist-video">
          {video ? (
            <iframe
              id="youtube-video"
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
          <p className="genre-deet">{`Genre: ${genre}`}</p>
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
  ) : (
    <ErrorPage />
  );
};

export default ArtistDetails;

ArtistDetails.propTypes = {
  artistID: PropTypes.string,
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
};
