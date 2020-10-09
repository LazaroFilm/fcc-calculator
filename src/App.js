import React, { useReducer } from "react";
import "./App.css";
import Keypad from "./Keypad";
import { keys, initialState, reducer } from "./Reducer";

const App = () => {
  const [{ calc, result }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div id="formula">{calc}</div>
      <div id="display">{result}</div>
      <Keypad keyPressed={dispatch} keys={keys} className="Keypad" />

      <p style={{ fontSize: "60%", backgroundColor: "white" }}>
        by LazaroFilm - last update: Oct 8 4:06
      </p>
    </div>
  );
};

export default App;
