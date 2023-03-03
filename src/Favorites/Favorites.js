import React from "react";
import ArtistLibrary from "../ArtistLibrary/ArtistLibrary";
import PropTypes from "prop-types";

const Favorites = (props) => {
  const { favorites } = props;
  return (
    <>
      {!favorites.length && (
        <h2 className="empty-favorites">
          You haven't favorited any musicians yet!
        </h2>
      )}
      <ArtistLibrary allArtists={favorites} />
    </>
  );
};

export default Favorites;

Favorites.propTypes = {
  favorites: PropTypes.array,
};
