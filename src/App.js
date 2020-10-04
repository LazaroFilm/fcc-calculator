import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Keypad from "./Keypad";
import Display from "./Display";
import { evaluate, format } from "mathjs";

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
  decimal: `.`,
};

const numbers = /\d|./;

const App = () => {
  const [calc, setCalc] = useState("0");
  const [result, setResult] = useState(0);

  const handleKey = (id, name) => {
    console.log(`Clicking key id=${id} name=${name}`);
    if (id === "clear") {
      console.log(`Clear!`);
      setCalc("0");
      setResult("0");
    } else if (id === "equals") {
      console.log(`Equals =`);
      handleEquals();
    } else if (id === "percent") {
      console.log(`not yet available`);
    } else {
      if (calc === "0") {
        setCalc(keys[id]);
        setResult(name);
      } else {
        if (numbers.test(name)) {
          if (numbers.test(result)) {
            setResult(result.toString() + name.toString());
          } else {
            setResult(name.toString());
          }
          setCalc(calc.toString() + keys[id].toString());
        } else {
          setResult(name);
          setCalc(calc.toString() + keys[id].toString());
        }
      }
    }
  };

  const handleEquals = () => {
    setResult(format(evaluate(calc), { precision: 14 }));
  };

  return (
    <div className="App">
      <div className="Display">
        <Display
          calc={calc}
          setCalc={setCalc}
          result={result}
          setResult={setResult}
          // handleEquals={handleEquals}
        />
      </div>
      <div className="Keypad">
        <Keypad handleKey={handleKey} />
      </div>
    </div>
  );
};

export default App;
