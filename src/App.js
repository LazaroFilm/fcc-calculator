import React, { useReducer } from "react";
import "./App.css";
import Keypad from "./Keypad";
import { keys, initialState, reducer } from "./Reducer";

const App = () => {
  const [{ calc, result, prevType }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const convDisp = (eq) => {
    let display = eq;
    for (let id in keys) {
      display = display.replace(keys[id][0], keys[id][1]);
    }
    return display;
  };

  return (
    <div className="App">
      <div id="formula">{convDisp(calc)}</div>
      <div id="display">{convDisp(result)}</div>
      <Keypad keyPressed={dispatch} keys={keys} className="Keypad" />
      {/* <p>{prevType}</p> */}
      <p style={{ fontSize: "60%", backgroundColor: "white" }}>by LazaroFilm</p>
    </div>
  );
};

export default App;
