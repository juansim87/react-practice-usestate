import { useState } from "react";
import "./ChangeColor.css";

export const ChangeColor = () => {
  const [color, setColor] = useState(true);

  const handleColor = () => {
    setColor(!color);
  };

  return (
    <div className="change-color">
      <h2>Botón de cambiar de color</h2>
      <button onClick={handleColor}>Cambiar de color</button>
      <div className={`square ${color ? "red" : "blue"}`}></div>
    </div>
  );
};
