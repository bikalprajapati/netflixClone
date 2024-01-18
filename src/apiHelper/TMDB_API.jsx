export const latestMovies = async (category) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=679e8a0539ccc1652ee3c5d8791dec03`
  );
  const data = await response.json();
  const result = data.results || [];
  console.log("fetch_top_rate", result);
  return result;
};
