const retrieveAllArtists = () => {
  return fetch(`http://localhost:3001/api/v1/artists`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("No Such Path");
    }
  });
};

const retrieveSingleArtist = (props) => {
  return fetch(`http://localhost:3001/api/v1/artists/${props.artistID}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("No Such path");
    }
  );
};

// const getAllFavorites = () => {
//   return fetch("http://localhost:3001/api/v1/favorites").then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("No Such path");
//   });
// };

// const addArtistToFavorites = (favoriteArtist) => {
//   console.log("ADD TO FAVES");
//   return fetch(`http://localhost:3001/api/v1/favorites`, {
//     method: "POST",
//     body: JSON.stringify(favoriteArtist),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("No Such path");
//   });
// };

// const updateFavStatus = (selectedArtist) => {
//   // console.log("Artist:", selectedArtist);
//   // console.log("singleArtistBefore:", selectedArtist.isFavorited);
//   return fetch(`http://localhost:3001/api/v1/artists/${selectedArtist.id}`, {
//     method: "PATCH",
//     body: JSON.stringify({
//       ...selectedArtist,
//       isFavorited: selectedArtist.isFavorited,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("No Such path");
//   });
// };

// const deleteFromFavorites = (id) => {
//   return fetch(`http://localhost:3001/api/v1/favorites/${id}`, {
//     method: "DELETE",
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("No Such path");
//   });
// };

export { retrieveAllArtists, retrieveSingleArtist };
