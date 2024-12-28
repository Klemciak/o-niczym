import React from "react";
import Slider from "./slider/Slider";
import Jokes from "./jokes/Jokes";
import Extend from "./extend/Extend";
import Bait from "./bait/Bait";
import Socialmedia from "./socialmedia/Socialmedia";

const Home = () => {
  return (
    <div className="wrap-home">
      <Slider />
      <Jokes />
      <Extend />
      <Bait />
      <Socialmedia />
    </div>
  );
};

export default Home;
