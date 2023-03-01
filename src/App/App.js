import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Library from "../ArtistLibrary/ArtistLibrary";
import { retrieveAllArtists } from "../apiCalls";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  const getArtists = () => {
    setLoading(true);
    retrieveAllArtists().then((data) => {
      setArtists(data.artists);
      setLoading(false);
    });
  };

  useEffect(() => {
    getArtists();
  }, []);
  console.log(artists);
  return (
    <main className="App">
      <Header />
      <Library allArtists={artists} />
    </main>
  );
};

export default App;
