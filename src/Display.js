import React, { useState } from "react";
import { evaluate, format } from "mathjs";
import "./Display.css";

const Display = ({ calc, setCalc }) => {
  // const [calc, setCalc] = useState("0");
  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(calc);
  };

  return (
    <div>
      <form id="calc-form" onSubmit={handleSubmit}>
        <input
          className="input-display"
          type="text"
          value={calc}
          onChange={(e) => setCalc(e.target.value)}
        />
      </form>
      <p>Calc: {calc}</p>
      <p>Result: {result}</p>
      <p id="display">{format(evaluate(result), { precision: 14 })}</p>
    </div>
  );
};

export default Display;
