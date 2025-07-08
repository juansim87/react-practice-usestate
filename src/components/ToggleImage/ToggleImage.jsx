import { useState } from 'react';
import "./ToggleImage.css";

export const ToggleImage = () => {

const [toggle, setToggle] = useState(true);

const handleToggle = () => {
    setToggle(!toggle);
}

const imageTiger = "https://en.people.cn/NMediaFile/2017/0203/FOREIGN201702030442000250890788570.jpg";
const imageLion = "https://i.redd.it/7v0duaytvq761.jpg"


  return (
    <>
    <div>
      <h2>Botón de Cambio de Imagen</h2>
      <button onClick={handleToggle}>
        Busca tu animal totémico
      </button>
      <div className='dynamic-image'>
      <img src= {toggle ? imageTiger : imageLion} alt="Imagen cambiante" />
      </div>

    </div>
    </>
  )
}