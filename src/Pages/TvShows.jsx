import React, { useEffect } from "react";

import Movies from "../components/Movies";

const TvShows = ({ setActivePage }) => {
  useEffect(() => {
    setActivePage("tvshow");
  }, [setActivePage]);

  return (
    <section className="bg-black mx-0 mt-5 pt-5">
      <div className="container-fluid mx-0 px-0">
        <Movies tt="35" />
        <Movies tt="80" />
        <Movies tt="99" />
        <Movies tt="36" />
      </div>
    </section>
  );
};

export default TvShows;
