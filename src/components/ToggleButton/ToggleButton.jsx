import { useState } from 'react';
import "./ToggleButton.css";

export const ToggleButton = () => {

const [toggle, setToggle] = useState(true);

const handleToggle = () => {
    setToggle(!toggle);
}


  return (
    <>
    <div>
      <h2>Botón Toggle</h2>
      <button onClick={handleToggle} className='toggle-button'>
        {toggle ? "🌞" : "🌚"}
      </button>

    </div>
    </>
  )
}


