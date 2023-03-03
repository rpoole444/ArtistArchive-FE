import React from "react";
import ArtistLibrary from "../ArtistLibrary/ArtistLibrary";

const Favorites = (props) => {
  return (
    <>
      {!props.favorites.length && ( //declare new variable for props.
        <h2 className="empty-favorites">
          You haven't favorited any musicians yet!
        </h2>
      )}
      <ArtistLibrary allArtists={props.favorites} />
    </>
  );
};

export default Favorites;
