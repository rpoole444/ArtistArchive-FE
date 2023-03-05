const retrieveAllArtists = () => {
  return fetch(`https://artist-archive-be.herokuapp.com/api/v1/artists`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("No Such Path");
    }
  });
};

const retrieveSingleArtist = (artistID) => {
  return fetch(`https://artist-archive-be.herokuapp.com/api/v1/artists/${artistID}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("No Such path");
    }
  );
};

export { retrieveAllArtists, retrieveSingleArtist };
