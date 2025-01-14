import React, { useState } from "react";
import "./Secret.scss";
import Wave from "../../../images/hii-wave.gif";
import { useTranslations } from "../../../translations/useTranslations";
const RevealBoard = () => {
  const t = useTranslations("what");
  const [positions, setPositions] = useState([
    { id: 1, x: 55, y: 70 }, // Wartości w procentach
    { id: 2, x: 40, y: 55 },
    { id: 3, x: 60, y: 40 },
  ]);

  const handleMouseDown = (e, id) => {
    const startEvent = e.type === "mousedown" ? e : e.touches[0]; // Obsługuje zarówno mysz, jak i dotyk
    const parent = e.currentTarget.parentElement; // Pobieramy element rodzica
    const parentWidth = parent.offsetWidth;
    const parentHeight = parent.offsetHeight;

    const startX = startEvent.clientX;
    const startY = startEvent.clientY;

    const selectedSquare = positions.find((square) => square.id === id);
    if (!selectedSquare) return;

    const initialX = selectedSquare.x;
    const initialY = selectedSquare.y;

    // Funkcja blokująca przewijanie
    const preventDefault = (e) => e.preventDefault();

    // Zapobiega przewijaniu podczas dotyku
    const onMove = (moveEvent) => {
      const moveEventClient =
        moveEvent.type === "mousemove" ? moveEvent : moveEvent.touches[0];
      const dx = ((moveEventClient.clientX - startX) / parentWidth) * 100;
      const dy = ((moveEventClient.clientY - startY) / parentHeight) * 100;

      setPositions((prev) =>
        prev.map((square) =>
          square.id === id
            ? { ...square, x: initialX + dx, y: initialY + dy }
            : square
        )
      );
    };

    const onEnd = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onEnd);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onEnd);
      // Przywraca domyślne przewijanie
      document.body.style.overflow = "auto";
      document.removeEventListener("touchmove", preventDefault, {
        passive: false,
      });
    };

    // Zablokowanie przewijania
    document.body.style.overflow = "hidden";
    document.addEventListener("touchmove", preventDefault, { passive: false });

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onEnd);
    document.addEventListener("touchmove", onMove);
    document.addEventListener("touchend", onEnd);
  };

  return (
    <div className="secret-wrap">
      <h2>{t.secretTitle}</h2>
      <img src={Wave} alt="gif-wave" />
      {positions.map((square) => (
        <div
          className="square"
          key={square.id}
          style={{
            top: `${square.y}%`,
            left: `${square.x}%`,
          }}
          onMouseDown={(e) => handleMouseDown(e, square.id)}
          onTouchStart={(e) => handleMouseDown(e, square.id)} // Obsługuje touchstart
        />
      ))}
    </div>
  );
};

export default RevealBoard;
