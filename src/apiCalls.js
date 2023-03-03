const retrieveAllArtists = () => {
  return fetch(`http://localhost:3001/api/v1/artists`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("No Such Path");
    }
  });
};

const retrieveSingleArtist = (artistID) => {
  return fetch(`http://localhost:3001/api/v1/artists/${artistID}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("No Such path");
    }
  );
};

export { retrieveAllArtists, retrieveSingleArtist };
