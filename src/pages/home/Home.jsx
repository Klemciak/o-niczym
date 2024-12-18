import React, { useState } from "react";
import "./Home.scss";

const Slide1 = () => <div className="slide-content">Slide 1</div>;
const Slide2 = () => <div className="slide-content">Slide 2</div>;
const Slide3 = () => <div className="slide-content">Slide 3</div>;
const Slide4 = () => <div className="slide-content">Slide 4</div>;

const Slider = () => {
  const [slides, setSlides] = useState([
    <Slide1 />,
    <Slide2 />,
    <Slide3 />,
    <Slide4 />,
  ]);

  const handleNext = () => {
    const updatedSlides = [...slides];
    const firstSlide = updatedSlides.shift(); // Usuwa pierwszy element
    updatedSlides.push(firstSlide); // Dodaje go na koniec
    setSlides(updatedSlides);
  };

  const handlePrev = () => {
    const updatedSlides = [...slides];
    const lastSlide = updatedSlides.pop(); // Usuwa ostatni element
    updatedSlides.unshift(lastSlide); // Dodaje go na początek
    setSlides(updatedSlides);
  };

  const handleSlideClick = (index) => {
    const updatedSlides = [...slides];
    const clickedPart = updatedSlides.splice(0, index); // Wycina slajdy przed klikniętym
    setSlides([...updatedSlides, ...clickedPart]);
  };

  return (
    <div className="slider-wrap">
      <button className="arrow left-arrow" onClick={handlePrev}>
        &#8592;
      </button>
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            onClick={() => handleSlideClick(index)}
          >
            {slide}
          </div>
        ))}
      </div>
      <button className="arrow right-arrow" onClick={handleNext}>
        &#8594;
      </button>
    </div>
  );
};

export default Slider;
