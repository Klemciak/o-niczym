import React from "react";
import "./Working.scss";
import hand from "../../../images/hand.png";
const Working = () => {
  return (
    <div className="working-wrap">
      <h2>
        Work
        <br />
        in
        <br />
        Progress...
      </h2>
      <img src={hand} alt="" />
    </div>
  );
};

export default Working;
