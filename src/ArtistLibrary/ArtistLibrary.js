import React from "react";
import "./ArtistLibrary.css";
import ArtistCard from "../ArtistCard/ArtistCard";

const ArtistLibrary = ({ allArtists }) => {
  console.log(allArtists);
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
          />
        );
      })
    ) : (
      <div className="no-artist">No Artists Matched Your Search</div>
    );
  return <div className="artist-container">{mappedArtists}</div>;
};

export default ArtistLibrary;
