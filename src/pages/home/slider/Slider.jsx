import React, { useState } from "react";
import "./Slider.scss";
import Slide1 from "./slides/Slide1.jsx";
import Slide2 from "./slides/Slide2.jsx";
import Slide3 from "./slides/Slide3.jsx";
import Slide4 from "./slides/Slide4.jsx";

const Slider = () => {
  const slidesData = [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />];

  const [classes, setClasses] = useState([
    "first",
    "second",
    "third",
    "fourth",
  ]);

  const handleNext = () => {
    setClasses((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setClasses((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, prev.length - 1)];
    });
  };

  const handleSlideClick = (className) => {
    if (className === "second") {
      handlePrev();
    } else if (className === "third") {
      handleNext();
      handleNext();
    } else if (className === "fourth") {
      handleNext();
    }
  };

  return (
    <div className="slider-wrap">
      <div className="slides-container">
        <button className="arrow left-arrow" onClick={handlePrev}>
          <span className="material-symbols-outlined left">
            arrow_upload_ready
          </span>
        </button>
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${classes[index]}`}
            onClick={() => handleSlideClick(classes[index])}
          >
            {slide}
          </div>
        ))}
        <button className="arrow right-arrow" onClick={handleNext}>
          <span className="material-symbols-outlined right">
            arrow_upload_ready
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
