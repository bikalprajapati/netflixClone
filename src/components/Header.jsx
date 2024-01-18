import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "react-responsive-modal/styles.css";
import { CgProfile } from "react-icons/cg";
import { Modal } from "react-responsive-modal";
import { Link, Route, Routes } from "react-router-dom";

const Header = ({ activePage }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [inputVisible, setInputVisible] = useState(false);
  const toggleInput = () => {
    setInputVisible(!inputVisible);
  };

  return (
    <>
      <header>
        <div>
          <Modal open={open} onClose={onCloseModal} center>
            <h2>Simple centered modal</h2>
          </Modal>
        </div>
        <div className="fixed-top container-fluid mx-auto py-3  bg-black">
          <div className="row ">
            <div className="col-md-2 mt-2">
              <Link to="/">
                <img
                  style={{ width: "100px" }}
                  className=""
                  src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-md-6 d-none d-lg-block mt-2">
              <ul className="d-flex gap-4 text-white list-unstyled nav">
                <li className="">
                  <Link
                    to="/"
                    className={`text-decoration-none text-white ${
                      activePage === "home" ? "active" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tvshow"
                    className={`text-decoration-none text-white ${
                      activePage === "tvshow" ? "active" : ""
                    }`}
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
                  <Link
                    to="/latest"
                    className={`text-decoration-none text-white ${
                      activePage === "latest" ? "active" : ""
                    }`}
                  >
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
            <div className="col-md-2 d-flex justify-content-center px-0">
              {inputVisible && (
                <input
                  type="text"
                  placeholder="Search"
                  className="d-inline col-md-6 mt-2 text-center border rounded"
                  style={{
                    width: "150px",
                    height: "30px",
                    transition: "all 0.8s ease-in",
                  }}
                />
              )}
            </div>
            <div className="col-md-2 text-white d-flex list-unstyled justify-content-between mt-2 nav">
              <li>
                {/* {inputVisible && (
                  <input type="text" className="d-realtive col-md-6" />
                )} */}
                <button
                  className="text-white bg-black border-0"
                  onClick={toggleInput}
                >
                  <FaSearch
                    style={{ fontSize: "25px", marginBottom: "10px" }}
                  />
                </button>
              </li>
              <li className="fw-semibold mb-3">Kids</li>
              <li>
                <FaBell style={{ fontSize: "25px", marginBottom: "10px" }} />
              </li>
              <li>
                <Link
                  to="/profile"
                  style={{
                    color: "white",
                  }}
                >
                  <CgProfile
                    className={`${activePage === "profile" ? "active" : ""} `}
                    style={{ fontSize: "25px", marginBottom: "10px" }}
                  />
                </Link>
                {/* <button onClick={handleOpen}> */}

                {/* </button> */}
              </li>

              {/* <li>
                {" "}
                <button onClick={onOpenModal} className="text-primary">
                  Open modal
                </button>
              </li> */}
            </div>
          </div>
        </div>
      </header>

      {/* <Poster /> */}
    </>
  );
};

export default Header;
