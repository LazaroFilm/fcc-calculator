import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Keypad from "./Keypad";
import Display from "./Display";

const keys = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
  add: `+`,
  subtract: `-`,
  multiply: `*`,
  divide: `/`,
};

const App = () => {
  const [calc, setCalc] = useState("0");
  const handleKey = (name) => {
    console.log(`TEST SUCCESSFUL from ${name}`);
    if (name === "clear") {
      console.log(`reset to 0`);
      setCalc("0");
    } else if (name === "equals") {
      console.log(`getting result`);
    } else {
      if (calc === "0") {
        setCalc(keys[name]);
      } else {
        setCalc(calc + keys[name]);
      }
    }
  };

  return (
    <div className="App">
      <p>APP DISPLAY: {calc}</p>
      <div className="Display">
        <Display calc={calc} setCalc={setCalc} />
      </div>
      <div className="Keypad">
        <Keypad handleKey={handleKey} />
      </div>
    </div>
  );
};

export default App;
