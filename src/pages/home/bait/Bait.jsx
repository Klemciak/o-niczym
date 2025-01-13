import React, { useState } from "react";
import "./Bait.scss";
import { useTranslations } from "../../../translations/useTranslations";
const Bait = () => {
  const t = useTranslations("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    // Pobieramy pozycję elementu względem okna
    const rect = event.target.getBoundingClientRect();

    // Obliczamy pozycję kursora względem środka diva
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Obliczanie odległości kursora od środka
    const offsetX = event.clientX - centerX;
    const offsetY = event.clientY - centerY;

    // Znormalizowany wektor, aby nadać przyciskowi "odpychający" efekt
    const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2) || 1; // Unikamy dzielenia przez 0
    const maxDistance = 100; // Maksymalne oddalenie przycisku

    // Skalowanie wektora oddalania
    const x =
      (-offsetX / distance) *
      Math.min(maxDistance, maxDistance / (distance / 50));
    const y =
      (-offsetY / distance) *
      Math.min(maxDistance, maxDistance / (distance / 50));

    // Aktualizacja stanu
    setMousePosition({ x, y });
  };
  const handleClick = () => {
    window.open(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
    );
  };
  return (
    <div className="bait-wrap">
      <h2>{t.baitTitle}</h2>
      <p>{t.baitText}</p>
      <div className="bait" onMouseMove={handleMouseMove}>
        <button
          onClick={handleClick}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          {t.baitButton}
        </button>
      </div>
    </div>
  );
};

export default Bait;
