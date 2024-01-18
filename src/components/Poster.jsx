import { FaPlay } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

import "../App.css";

const Poster = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/123?api_key=679e8a0539ccc1652ee3c5d8791dec03`
    )
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  console.log("datataa", data);
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          style={{
            height: "90vh",
            // backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
            backgroundImage: data.backdrop_path
              ? `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`
              : "none",
            backgroundSize: "cover",
          }}
        >
          <div className="col-md-5 width-50px text-white position-absolute top">
            <div className="ms-5">
              <h1>{data.title}</h1>
              <p>{data.overview}</p>
              <div>
                <button className="flex me-3 fs-4 border-0 rounded p-1 bg-white text-black fw-semibold px-2">
                  <FaPlay
                    style={{
                      fontSize: "22px",
                      marginRight: "5px",
                      marginBottom: "5px",
                    }}
                  />
                  Play
                </button>
                <button
                  style={{
                    background: "#404040",
                    opacity: "0.6",
                  }}
                  className="me-3 fs-4 border-0 rounded p-1  text-white fw-semibold px-2 opacity-30"
                >
                  <div>
                    <IoIosInformationCircleOutline
                      style={{
                        fontSize: "30px",
                        marginRight: "5px",
                        marginBottom: "5px",
                      }}
                    />
                    More info
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
