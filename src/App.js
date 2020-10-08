import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Keypad from "./Keypad";
// import Display from "./Display";
import { evaluate, format } from "mathjs";

const keys = {
  one: [`1`, "1", "num"],
  two: [`2`, "2", "num"],
  three: [`3`, "3", "num"],
  four: [`4`, "4", "num"],
  five: [`5`, "5", "num"],
  six: [`6`, "6", "num"],
  seven: [`7`, "7", "num"],
  eight: [`8`, "8", "num"],
  nine: [`9`, "9", "num"],
  zero: [`0`, "0", "num"],

  decimal: [`.`, ".", "dot"],

  add: [`+`, "+", "oper"],
  subtract: [`-`, "–", "oper"],
  multiply: [`*`, "×", "oper"],
  divide: [`/`, "÷", "oper"],

  equals: [`=`, "=", "equal"],

  clear: [`ac`, "AC", "clear"],
  backspace: [`bksp`, "⌫", "bksp"],
};

const App = () => {
  const [calc, setCalc] = useState("0");
  const [result, setResult] = useState("0");
  const [prevType, setPrevType] = useState("clear");

  const handleKey = (id) => {
    const keyType = keys[id][2];
    switch (keyType) {
      case "num":
        handleNumber(id);
        break;
      case "oper":
        handleOper(id);
        break;
      case "dot":
        handleDot();
        break;
      case "equal":
        handleEqual();
        break;
      case "clear":
        handleClear();
      default:
        break;
    }
  };

  const handleNumber = (id) => {
    const keySym = keys[id][0];
    if (prevType === "num" || prevType === "dot") {
      if (result[0] === "0" && result[1] !== ".") {
        setCalc(keySym);
        setResult(keySym);
      } else {
        setCalc(calc + keySym);
        setResult(result + keySym);
      }
    } else if (prevType === "clear" || prevType === "equal") {
      setCalc(keySym);
      setResult(keySym);
    } else if (prevType === "oper") {
      setCalc(calc + keySym);
      setResult(keySym);
    }
    setPrevType("num");
  };

  const handleDot = () => {
    setCalc(calc + ".");
    setResult(result + ".");
    setPrevType("dot");
  };

  const handleOper = (id) => {
    const keySym = keys[id][0];
    const keyName = keys[id][1];
    if (prevType === "equal") {
      setCalc(result + keySym);
      setResult(result + keyName);
    } else {
      setCalc(calc + keySym);
      setResult(result + keyName);
    }
    setPrevType("oper");
  };

  const handleClear = () => {
    setCalc("0");
    setResult("0");
    setPrevType("clear");
  };
  const handleEqual = () => {
    setCalc("'");
    setResult(format(evaluate(calc), { precision: 14 }));
    setPrevType("equal");
  };

  return (
    <div className="App">
      <div id="formula">{calc}</div>
      <div id="display">{result}</div>
      {/* <Display
        calc={calc}
        setCalc={setCalc}
        result={result}
        setResult={setResult}
        className="Display"
        // handleEquals={handleEquals}
      /> */}
      <Keypad handleKey={handleKey} keys={keys} className="Keypad" />
      {/* <p>{`calc: ${calc} Result: ${result}`}</p> */}
      {/* <p>{`Equal pressed? ${equalPressed}`}</p> */}
      {/* <p>{prevType}</p> */}
      <p style={{ fontSize: "60%", backgroundColor: "white" }}>
        by LazaroFilm - last update: Oct 7 4:12
      </p>
    </div>
  );
};

export default App;
