import React from "react";
import Movies from "../components/Movies";

function Home() {
  return (
    <div>
      <Movies tt="28" />
      <Movies tt="12" />
      <Movies tt="16" />
      <Movies tt="18" />
      <Movies tt="27" />
      {/* Action: 28
Adventure: 12
Animation: 16
Comedy: 35
Crime: 80
Documentary: 99
Drama: 18
Family: 10751
Fantasy: 14
History: 36
Horror: 27 */}
    </div>
  );
}

export default Home;
