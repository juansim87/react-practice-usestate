import { useState } from 'react'

export const SimpleCounter = (props) => {

//**Recordar intentar parametrizar el valor inicial mediante un input tipo number */
const { initialNumber } = props;

    const [counter, setCounter] = useState(initialNumber);

    const onAdd = () => {
        setCounter(counter + 1);
        console.log("Sumar", counter);
    }

    const onSubstract = () => {
        setCounter(counter - 1);
        console.log("Restar", counter);
    }

    const onReset = () => {
        setCounter(0);
        console.log("Resetear", counter);
    } 

  return (
    <>
     <div>
        <h2>Contador Simple</h2>
        {/* <input type="number"/> */}
        <h2>{counter}</h2>
        <button onClick={onAdd}>Sumar</button>
        <button onClick={onSubstract}>Restar</button>
        <button onClick={onReset}>Resetear</button>
        
     </div> 
    </>
  )
}


