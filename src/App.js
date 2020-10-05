import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Keypad from "./Keypad";
import Display from "./Display";
import { evaluate, format } from "mathjs";

const keys = {
  one: [`1`, "1"],
  two: [`2`, "2"],
  three: [`3`, "3"],
  four: [`4`, "4"],
  five: [`5`, "5"],
  six: [`6`, "6"],
  seven: [`7`, "7"],
  eight: [`8`, "8"],
  nine: [`9`, "9"],
  zero: [`0`, "0"],
  add: [`+`, "+"],
  subtract: [`-`, "-"],
  multiply: [`*`, "×"],
  divide: [`/`, "÷"],
  decimal: [`.`, "."],
  equals: [`=`, "="],
  clear: [`ac`, "AC"],
  percent: [`%`, "%"],
};

const numbers = /[\d.]+/;

const App = () => {
  const [calc, setCalc] = useState("0");
  const [result, setResult] = useState(0);
  const [equalPressed, setEqualPressed] = useState(false);

  const handleKey = (id) => {
    const keySym = keys[id][0];
    const keyName = keys[id][1];
    console.log(`Clicking key id=${id} name=${keyName}`);
    if (equalPressed) {
      setCalc("0");
      setResult("0");
      setEqualPressed(false);
      console.log(`RESET AFTER EQUAL`);
    } else {
      console.log(`move along`);
      setEqualPressed(false);
    }
    console.log(`past equal thingy`);
    if (id === "clear") {
      console.log(`Clear!`);
      setCalc("0");
      setResult("0");
      setEqualPressed(false);
    } else if (id === "equals") {
      // console.log(`Equals =`);
      setEqualPressed(true);
      handleEquals();
    } else if (id === "percent") {
      console.log(`not yet available`);
      setEqualPressed(false);
    } else {
      if (calc === "0") {
        setCalc(keySym);
        setResult(keyName);
      } else {
        if (numbers.test(keySym)) {
          if (numbers.test(result)) {
            // console.log("adding to number");
            setResult(result.toString() + keyName.toString());
          } else {
            // console.log("starting number");
            setResult(keyName.toString());
          }
          setCalc(calc.toString() + keySym.toString());
        } else {
          setResult(keyName);
          setCalc(calc.toString() + keySym.toString());
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
        <Keypad handleKey={handleKey} keys={keys} />
      </div>
      {/* <p>{`calc: ${calc} Result: ${result}`}</p> */}
      {/* <p>{`Equal pressed? ${equalPressed}`}</p> */}
      <p style={{ fontSize: "60%", backgroundColor: "white" }}>by LazaroFilm</p>
    </div>
  );
};

export default App;
