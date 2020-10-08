import React from "react";
// import { evaluate, format } from "mathjs";
import "./Display.css";

const Display = ({ calc, setCalc, result, setResult }) => {
  // const [calc, setCalc] = useState("0");
  // const [result, setResult] = useState(0);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setResult(calc);
  // };

  return (
    <span id="screen">
      {/* <form id="calcForm" onSubmit={handleSubmit}>
        <input
          className="input-display"
          type="text"
          value={calc}
          onChange={(e) => setCalc(e.target.value)}
        />
      </form> */}
      <div>{calc}</div>
      <div id="display">{result}</div>
      {/* <p>{format(evaluate(result), { precision: 14 })}</p> */}
    </span>
  );
};

export default Display;
