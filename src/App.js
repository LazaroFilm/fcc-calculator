import React, { useState } from "react";
import { evaluate, format } from "mathjs";
// import logo from "./logo.svg";
// import "./App.css";
import Keypad_table from "./Keypad_table";

function App() {
  const [display, setDisplay] = useState("initial display");
  const [calc, setCalc] = useState("1");
  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`calc= ${e}`);
    console.log(e);
    console.log(calc);
    setResult(calc);
  };

  return (
    <div className="App">
      <Keypad_table />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>This will become a calculator... at some point.</p>
        <p>this is displaying: {display}</p>
        <button onClick={() => setDisplay("updated display")}>Click me!</button>
        <button onClick={() => setDisplay("initial display")}>Reset</button>
        <p>{3 + 5 * 6 - 2 / 4}</p>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={calc}
          onChange={(e) => setCalc(e.target.value)}
        />
        <input type="submit" value="=" />
      </form>
      <p>{format(evaluate(result), { precision: 14 })}</p>
    </div>
  );
}

export default App;
