import React, { useEffect } from "react";

import Movies from "../components/Movies";
import Poster from "../components/Poster";

const Home = ({ includePoster = true, setActivePage }) => {
  useEffect(() => {
    setActivePage("home");
  }, [setActivePage]);

  return (
    <div>
      {includePoster && <Poster />}
      <Movies tt="28" />
      <Movies tt="12" />
      <Movies tt="16" />
      <Movies tt="18" />
      <Movies tt="27" />
    </div>
  );
};

export default Home;

//corresponding category and its name
{
  /* Action: 28
Adventure: 12
Animation: 16
Comedy: 35
Crime: 80
Documentary: 99
Drama: 18
History: 36
Horror: 27 
Family: 10751
Fantasy: 14*/
}
