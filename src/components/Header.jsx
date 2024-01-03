import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Poster from "../Pages/Poster";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function Header() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <header>
        <div>
          <Modal open={open} onClose={onCloseModal} center>
            <h2>Simple centered modal</h2>
          </Modal>
        </div>
        <div className="fixed-top container-fluid mx-auto py-3  bg-black">
          <div className="row">
            <div className="col-md-2 mt-2">
              <img
                style={{ width: "100px" }}
                className=""
                src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
                alt=""
              />
            </div>
            <div className="col-md-8 d-none d-lg-block mt-2">
              <ul className="d-flex gap-5 text-white list-unstyled ">
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
            <div className="col-md-2 text-white d-flex list-unstyled justify-content-between mt-2">
              <li>
                <FaSearch style={{ fontSize: "25px", marginBottom: "10px" }} />
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

      <Poster />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Header;
