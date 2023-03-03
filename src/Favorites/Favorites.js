import React, { useState, useEffect } from "react";
import ArtistLibrary from "../ArtistLibrary/ArtistLibrary";
import { getAllFavorites } from "../apiCalls";
import { cleanArtistData } from "../utilities";

const Favorites = (props) => {
  // const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   getFavorites();
  // });

  // const getFavorites = () => {
  //   getAllFavorites()
  //     .then((data) => {
  //       const cleandedFavorites = data.map((artist) => cleanArtistData(artist));
  //       setFavorites(cleandedFavorites);
  //     })
  //     .catch((error) => setError({ error: error.message }));
  // };

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
