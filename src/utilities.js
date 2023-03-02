export const trimArtistData = (artist) => {
  return {
    id: artist.id,
    name: artist.name,
    image: artist.image,
    rank: artist.rank,
    description: artist.description,
    genre: artist.genre,
    video: artist.video,
  };
};

export const cleanArtistData = (artist) => {
  return {
    id: artist.id,
    name: artist.name,
    image: artist.image,
    rank: artist.rank,
    description: artist.description,
    genre: artist.genre,
    video: artist.video,
    isFavorited: artist.isFavorited,
  };
};
