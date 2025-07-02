import { useState } from 'react'

export const TextBox = () => {

    const [text, setText] = useState("");

  return (
    <>
    <div>
    <h2>Caja de Texto</h2>
      <input type="text" onChange={(event) => setText(event.target.value)}/>
      <p>Texto cambiante: {text}</p>
    </div>
    </>
  )
}


