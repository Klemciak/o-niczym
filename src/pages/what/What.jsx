import React from "react";
import Secret from "./secret/Secret.jsx";
import Quiz from "./quiz/Quiz.jsx";
import Img3d from "./img3d/Img3d.jsx";
import Working from "./working/Working.jsx";
const What = () => {
  return (
    <div className="what-wrap">
      <Secret />
      <Quiz />
      <Img3d />
      <Working />
    </div>
  );
};

export default What;
