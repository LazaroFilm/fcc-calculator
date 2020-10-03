import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Keypad_table from "./Keypad_table";
import Display from "./Display";

const App = () => {
  const [calc, setCalc] = useState("0");
  const [result, setResult] = useState("test");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`calc= ${e}`);
    console.log(e);
    console.log(calc);
    setResult(calc);
  };

  return (
    <div className="App">
      <div className="Display">
        <Display />
      </div>
      <div className="Keypad">
        <Keypad_table />
      </div>
    </div>
  );
};

export default App;
