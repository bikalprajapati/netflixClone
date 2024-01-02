import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Poster from "../Pages/Poster";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBell } from "react-icons/fa";

function Header() {
  return (
    <>
      <header>
        <div className="container-fluid mx-auto py-3  bg-black">
          <div className="row">
            <div className="col-md-2 ">
              <img
                style={{ width: "100px" }}
                className=""
                src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <ul className="d-flex gap-5 text-white list-unstyled">
                <li className="">
                  <Link to="/" className="text-decoration-none text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tvshow"
                    className="text-decoration-none text-white"
                  >
                    Tv Shows
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-white">
                    Movies
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-white">
                    Latest
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-white">
                    My List
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none text-white">
                    Browse By Language
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 text-white d-flex list-unstyled justify-content-between">
              <li>
                <FaSearch style={{ fontSize: "25px", marginBottom: "10px" }} />
              </li>
              <li className="fw-semibold mb-3">Kids</li>
              <li>
                <FaBell style={{ fontSize: "25px", marginBottom: "10px" }} />
              </li>
              <li>
                <CgProfile style={{ fontSize: "25px", marginBottom: "10px" }} />
              </li>
            </div>
          </div>
        </div>
      </header>

      <Poster />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Header;
