import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";

import "../Movies.css";
import { latestMovies } from "../apiHelper/TMDB_API";

import "bootstrap/dist/css/bootstrap.min.css";

const Latest = ({ setActivePage }) => {
  const [topRatedData, setTopRatedData] = useState([]);

  useEffect(() => {
    setActivePage("latest");
  }, [setActivePage]);

  console.log(topRatedData);

  useEffect(() => {
    const fetchTopRatedData = async () => {
      try {
        const result = await latestMovies();
        setTopRatedData(result);
      } catch (error) {
        console.log("latestError", error);
      }
    };
    fetchTopRatedData();
  }, []);

  console.log("aaa", topRatedData);

  return (
    <div className="container-fluid bg-black p-3 mt-5 pt-5">
      <div className="row">
        <h1 className="text-white">Top Rated Movies</h1>
      </div>
      <Carousel className="w-60 ">
        {topRatedData.map(
          (movie, index) =>
            // Display 5 movies at a time
            index % 5 === 0 && (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-around gap-2">
                  {/* Map through the next 5 movies */}
                  {topRatedData.slice(index, index + 5).map((movie) => (
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
};

export default Latest;
