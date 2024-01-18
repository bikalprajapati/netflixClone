import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "./index.css";

import Home from "./Pages/Home";
import Latest from "./Pages/Latest";
import TvShows from "./Pages/TvShows";

import Poster from "./components/Poster";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/profile";

function App() {
  const [activePage, setActivePage] = useState("");

  return (
    <>
      <Header activePage={activePage} />
      <Routes>
        <Route path="/" element={<Home setActivePage={setActivePage} />} />
        <Route
          path="/latest"
          element={<Latest setActivePage={setActivePage} />}
        />
        <Route
          path="/tvshow"
          element={<TvShows setActivePage={setActivePage} />}
        />
        <Route
          path="/profile"
          element={<Profile setActivePage={setActivePage} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
