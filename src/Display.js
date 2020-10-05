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
    <div id="screen">
      {/* <form id="calcForm" onSubmit={handleSubmit}>
        <input
          className="input-display"
          type="text"
          value={calc}
          onChange={(e) => setCalc(e.target.value)}
        />
      </form> */}
      <p>{calc}</p>
      <p id="display">{result}</p>
      {/* <p>{format(evaluate(result), { precision: 14 })}</p> */}
    </div>
  );
};

export default Display;
