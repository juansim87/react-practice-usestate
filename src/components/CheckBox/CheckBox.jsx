import { useState } from 'react';
import "./CheckBox.css";

export const CheckBox = () => {

    const [check, setCheck] = useState(false);

const handleCheck = (e) => {
    setCheck(e.target.checked)  
}

  return (

    <div>
    <h2>Caja de check dinámica</h2>
      <input type="checkbox" id='checkbox' onChange={handleCheck}/>
      <label for="checkbox" className={check ? "accepted" : "denied"}>{check ? "Aceptado" : "No aceptado"}</label>
    </div>
  )
}


