import React, { useState } from "react";
import "./Bait.scss";

const Bait = () => {
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
      <h2>Otwórz Drzwi do Niezwykłej Przygody!</h2>
      <p>
        Zachęcamy do odkrycia czegoś absolutnie wyjątkowego! Niezależnie od
        tego, gdzie się znajdujesz i co robisz, ten moment jest idealny, by
        zrobić coś nowego. Może to zmienić Twoje życie, a może po prostu
        sprawić, że poczujesz się lepiej. Niezależnie od tego, co się wydarzy -
        na pewno nie pożałujesz! Więc dlaczego nie spróbować? Czekamy na Ciebie
        z czymś niesamowitym! Kliknij poniżej i daj się zaskoczyć - niech ta
        chwila będzie Twoja!
      </p>
      <div className="bait" onMouseMove={handleMouseMove}>
        <button
          onClick={handleClick}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          Otwórz!
        </button>
      </div>
    </div>
  );
};

export default Bait;
