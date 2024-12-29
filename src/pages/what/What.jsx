import React from "react";
import Secret from "./secret/Secret.jsx";
import Quiz from "./quiz/Quiz.jsx";
import Img3d from "./img3d/Img3d.jsx";
const What = () => {
  return (
    <div className="what-wrap" style={{ height: "6000px" }}>
      <Secret />
      <Quiz />
      <Img3d />
    </div>
  );
};

export default What;
