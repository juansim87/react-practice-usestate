import { useState } from 'react';
import "./EditableText.css";

export const EditableText = () => {


    const [text, setText] = useState("");
    const [showInput, setShowInput] = useState(false);

    const handleClickText = () => {
        setShowInput(true)
    }

    const handleBlur = () => {
        setShowInput(false)
    }

    const changeText = (event) => {
        setText(event.target.value)
    }

    return (
    <div>
    <h2>Texto Editable</h2>
    <p onClick={handleClickText}>Texto Editable: {text}</p>
    {showInput ? <input type="text" id="text" onChange={changeText} onBlur={handleBlur}/> : ""}
    
      
    </div>
  )
}
