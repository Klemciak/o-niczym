import React, { useState } from "react";
import "./Slider.scss";
import Slide1 from "./slides/Slide1.jsx";
import Slide2 from "./slides/Slide2.jsx";
import Slide3 from "./slides/Slide3.jsx";
import Slide4 from "./slides/Slide4.jsx";
const Slider = () => {
  const slidesData = [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />];

  // State przechowuje aktualne klasy slajdów
  const [classes, setClasses] = useState([
    "first",
    "second",
    "third",
    "fourth",
  ]);

  // Funkcja zmieniająca klasy w prawo
  const handleNext = () => {
    setClasses((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first]; // Pierwszy element idzie na koniec
    });
  };

  // Funkcja zmieniająca klasy w lewo
  const handlePrev = () => {
    setClasses((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, prev.length - 1)]; // Ostatni element idzie na początek
    });
  };

  return (
    <div className="slider-wrap">
      <div className="slides-container">
        <button className="arrow left-arrow" onClick={handlePrev}>
          <span class="material-symbols-outlined left">arrow_upload_ready</span>
        </button>
        {slidesData.map((slide, index) => (
          <div key={index} className={`slide ${classes[index]}`}>
            {slide}
          </div>
        ))}
        <button className="arrow right-arrow" onClick={handleNext}>
          <span class="material-symbols-outlined right">
            arrow_upload_ready
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
