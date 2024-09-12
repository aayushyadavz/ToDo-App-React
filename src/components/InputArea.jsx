import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState(""); // moved in here from app component

  function handleChange(event) { // moved in here from app component
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    // moved in here from app component
    <div className="form"> 
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={() => {
        props.onAdd(inputText)
        setInputText(""); // reset the input text as the button is pressed
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;


// Note -
// When the button gets clicked, it triggers the arrow function and when it does, it's going to call the onAdd function and pass in the inputText that lives inside this component.