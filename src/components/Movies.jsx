import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Movies.css"; // Import a CSS file for styling

function Movies(props) {
  const [movieData, setMovieData] = useState([]);
  const [genreName, setGenreName] = useState("");

  useEffect(() => {
    const genreMap = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
    };

    setGenreName(genreMap[props.tt] || "");

    if (props.tt) {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=679e8a0539ccc1652ee3c5d8791dec03&with_genres=${props.tt}`
      )
        .then((res) => res.json())
        .then((data) => setMovieData(data.results))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [props.tt]);

  return (
    <div className="container-fluid bg-black p-3">
      <div className="row">
        <h1 className="text-white">{genreName}</h1>
      </div>
      <Carousel className="w-60 ">
        {movieData.map(
          (movie, index) =>
            // Display 5 movies at a time
            index % 5 === 0 && (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-around gap-2">
                  {/* Map through the next 5 movies */}
                  {movieData.slice(index, index + 5).map((movie) => (
                    <div key={movie.id} className="movie-item">
                      <img
                        className="d-block w-100"
                        style={{ height: "200px" }}
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt={movie.original_title}
                      />
                      <div className="movie-title">
                        <h3>{movie.original_title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            )
        )}
      </Carousel>
    </div>
  );
}

export default Movies;
