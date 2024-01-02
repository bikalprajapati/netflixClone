export const singleMovieAPI = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/11?api_key=679e8a0539ccc1652ee3c5d8791dec03"
  );
  const result = response.json();
  return result;
};
