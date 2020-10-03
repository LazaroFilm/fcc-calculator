import React, { useState } from "react";
import { evaluate, format } from "mathjs";
import "./Display.css";

const Display = (handleSubmit, calc, setCalc, result) => {
  // const [display, setDisplay] = useState("initial display");
  // const [calc, setCalc] = useState("0");
  // const [result, setResult] = useState(0);

  return (
    <div>
      <form id="calc-form" onSubmit={handleSubmit}>
        <input
          className="input-display"
          type="text"
          value={calc}
          onChange={(e) => setCalc(e.target.value)}
        />
        {/* <input type="submit" value="=" /> */}
      </form>
      <p>{result}</p>
      {/* <p id="display">{format(evaluate(result), { precision: 14 })}</p> */}
    </div>
  );
};

export default Display;
