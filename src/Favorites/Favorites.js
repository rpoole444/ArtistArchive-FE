import React from "react";
import ArtistLibrary from "../ArtistLibrary/ArtistLibrary";
import PropTypes from "prop-types";
import "./Favorites.css";

const Favorites = (props) => {
  const { favorites } = props;
  return (
    <div className="favorites-container">
      {!favorites.length && (
        <h2 className="empty-favorites">
          You haven't favorited any musicians yet!
        </h2>
      )}
      <ArtistLibrary allArtists={favorites} />
    </div>
  );
};

export default Favorites;

Favorites.propTypes = {
  favorites: PropTypes.array,
};
