import React from "react";
import Secret from "./secret/Secret.jsx";
import Quiz from "./quiz/Quiz.jsx";
const What = () => {
  return (
    <div className="what-wrap" style={{ height: "6000px" }}>
      <Secret />
      <Quiz />
    </div>
  );
};

export default What;
