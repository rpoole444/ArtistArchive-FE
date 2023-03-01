const retrieveAllArtists = () => {
  return fetch(`http://localhost:3001/api/v1/artists`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return new Error("No Such Path");
    }
  });
};

export { retrieveAllArtists };
