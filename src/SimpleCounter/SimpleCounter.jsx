import { useState } from 'react'

export const SimpleCounter = () => {

    const [counter, setCounter] = useState(0);

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
        <input type="number"/>
        <h2>{counter}</h2>
        <button onClick={onAdd}>Suma</button>
        <button onClick={onSubstract}>Resta</button>
        <button onClick={onReset}>Resetear</button>
        
     </div> 
    </>
  )
}


