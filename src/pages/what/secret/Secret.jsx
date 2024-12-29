import React, { useState } from "react";
import "./Secret.scss";
import Wave from "../../../images/hii-wave.gif";
const RevealBoard = () => {
  const [positions, setPositions] = useState([
    { id: 1, x: 55, y: 70 }, // Wartości w procentach
    { id: 2, x: 40, y: 55 },
    { id: 3, x: 60, y: 40 },
  ]);

  const handleMouseDown = (e, id) => {
    const parent = e.currentTarget.parentElement; // Pobieramy element rodzica
    const parentWidth = parent.offsetWidth;
    const parentHeight = parent.offsetHeight;

    const startX = e.clientX;
    const startY = e.clientY;

    const selectedSquare = positions.find((square) => square.id === id);
    if (!selectedSquare) return;

    const initialX = selectedSquare.x;
    const initialY = selectedSquare.y;

    const onMouseMove = (moveEvent) => {
      const dx = ((moveEvent.clientX - startX) / parentWidth) * 100;
      const dy = ((moveEvent.clientY - startY) / parentHeight) * 100;

      setPositions((prev) =>
        prev.map((square) =>
          square.id === id
            ? { ...square, x: initialX + dx, y: initialY + dy }
            : square
        )
      );
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="secret-wrap">
      <h2>Przesuń bloki by zobaczyć co kryją!</h2>
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
        />
      ))}
    </div>
  );
};

export default RevealBoard;
