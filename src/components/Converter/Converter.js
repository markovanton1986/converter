import React, { useState } from "react";
import "./main.css";

function Converter() {
  let [state, setState] = useState({ value: "" });
  let [color, setColor] = useState("rgb(187, 187, 187)");

  const handleChange = (event) => {
    let text = event.target.value;
    setState({ value: text });
    
    if (text.length === 7) hex2rgb(text);
  };

  const hex2rgb = (c) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    if(result) {
      setColor(color = `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`)
    } else {
      setColor(color = `Ошибка!`)
    }
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <form className="converter">
        <input
          className="converter__input"
          type="text"
          value={state.value}
          onChange={handleChange}
        />
        <div className="converter__display">
          <span className="converter__text">{color}</span>
        </div>
      </form>
    </div>
  );
}

export default Converter;