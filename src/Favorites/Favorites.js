import React, { useState, useEffect } from "react";
import ArtistLibrary from "../ArtistLibrary/ArtistLibrary";
import { getAllFavorites } from "../apiCalls";
import { cleanArtistData } from "../utilities";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getFavorites();
  });

  const getFavorites = () => {
    getAllFavorites()
      .then((data) => {
        const cleandedFavorites = data.map((artist) => cleanArtistData(artist));
        setFavorites(cleandedFavorites);
      })
      .catch((error) => setError({ error: error.message }));
  };

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
