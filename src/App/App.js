import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Library from "../ArtistLibrary/ArtistLibrary";
import ArtistDetails from "../ArtistDetails/ArtistDetails";
import ErrorPage from "../ErrorHandling/ErrorPage";
// import ErrorModal from "../ErrorHandling/ErrorModal";
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

  // const errorModal = error ? <ErrorModal message={error} /> : null;
  return (
    <main className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return loading ? (
              <div className="loading-page">
                <h3 className="loading-text">Loading...</h3>
              </div>
            ) : (
              <div>
                <Header />
                <Library allArtists={artists} />
              </div>
            );
          }}
        ></Route>
        <Route
          exact
          path="/:id"
          render={({ match }) => {
            return loading ? (
              <div className="loading-page">
                <h3 className="loading-text">Loading...</h3>
              </div>
            ) : (
              <div>
                <ArtistDetails
                  artistID={match.params.id}
                  key={match.params.id}
                />
              </div>
            );
          }}
        />
        <Route>
          <Header />
          <ErrorPage />
        </Route>
      </Switch>
      {/* {errorModal} */}
    </main>
  );
};

export default App;
