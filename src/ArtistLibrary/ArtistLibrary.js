import React from "react";
import "./ArtistLibrary.css";
import ArtistCard from "../ArtistCard/ArtistCard";
import PropTypes from "prop-types";

const ArtistLibrary = ({ allArtists }) => {
  const mappedArtists =
    allArtists.length > 0 ? (
      allArtists.map((artist) => {
        return (
          <ArtistCard
            id={artist.id}
            key={artist.id}
            image={artist.image}
            name={artist.name}
            rank={artist.rank}
            genre={artist.genre}
          />
        );
      })
    ) : (
      <div className="no-artist">No Artists Matched Your Search</div>
    );
  return <div className="artists-container">{mappedArtists}</div>;
};

export default ArtistLibrary;

ArtistLibrary.propTypes = {
  allArtists: PropTypes.array,
};
