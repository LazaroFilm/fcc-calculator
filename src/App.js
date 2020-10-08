import React, { useReducer } from "react";
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

const initialState = {
  calc: "0",
  result: "0",
  prevType: "clear",
};

const reducer = function (state, id) {
  let { calc, result, prevType } = state;
  const keyType = keys[id][2];
  switch (keyType) {
    case "num":
      return handleNumber(state, id);
    case "oper":
      return handleOper(state, id);
    case "dot":
      return handleDot(state);
    case "equal":
      return handleEqual(state);
    case "clear":
      return handleClear(state);
    default:
      break;
  }
};

const handleNumber = (state, id) => {
  let { calc, result, prevType } = state;
  const keySym = keys[id][0];
  if (prevType === "num" || prevType === "dot") {
    if (result[0] === "0" && result[1] !== ".") {
      return {
        calc: keySym,
        result: keySym,
        prevType: "num",
      };
    } else {
      return {
        calc: calc + keySym,
        result: result + keySym,
        prevType: "num",
      };
    }
  } else if (prevType === "clear" || prevType === "equal") {
    return {
      calc: keySym,
      result: keySym,
      prevType: "num",
    };
  } else if (prevType === "oper") {
    return {
      calc: calc + keySym,
      result: keySym,
      prevType: "num",
    };
  }
};

const handleDot = (state) => {
  let { calc, result } = state;
  return {
    calc: calc + ".",
    result: result + ".",
    prevType: "num",
  };
};

const handleOper = (state, id) => {
  let { calc, result, prevType } = state;

  const keySym = keys[id][0];
  const keyName = keys[id][1];
  if (prevType === "equal") {
    return {
      calc: result + keySym,
      result: result + keySym,
      prevType: "oper",
    };
  } else {
    return {
      calc: calc + keySym,
      result: result + keySym,
      prevType: "oper",
    };
  }
};

const handleClear = () => {
  return {
    calc: "0",
    result: "0",
    prevType: "clear",
  };
};
const handleEqual = (state) => {
  let { calc } = state;
  return {
    calc: "'",
    result: format(evaluate(calc), { precision: 14 }),
    prevType: "equal",
  };
};

const App = () => {
  // const [calc, setCalc] = useState("0");
  // const [result, setResult] = useState("0");
  // const [prevType, setPrevType] = useState("clear");
  const [{ calc, result }, dispatch] = useReducer(reducer, initialState);

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
      <Keypad handleKey={dispatch} keys={keys} className="Keypad" />

      {/* <p>{prevType}</p> */}
      <p style={{ fontSize: "60%", backgroundColor: "white" }}>
        by LazaroFilm - last update: Oct 7 4:12
      </p>
    </div>
  );
};

export default App;
