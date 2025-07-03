import { useState } from "react";

export const ShowHideButton = () => {
  
    const [switchText, setSwitchText] = useState(true);

    const handleHide = () => {
            setSwitchText(!switchText)
    }
  
    return (
    <>
      <div id="vanishing-text">
      <h2>Botón de ocultar y mostrar</h2>
        <button onClick={handleHide}>{switchText ? "Ocultar" : "Mostrar"}</button>
        <p>{switchText ? "Este texto aparece y desaparece" : ""}</p>
      </div>
    </>
  );
};
