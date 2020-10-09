import React, { useReducer } from "react";
import "./App.css";
import Keypad from "./Keypad";
import { keys, initialState, reducer } from "./Reducer";

const App = () => {
  const [{ calc, result, prevType }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <div id="formula">{calc}</div>
      <div id="display">{result}</div>
      <Keypad keyPressed={dispatch} keys={keys} className="Keypad" />
      <p>{prevType}</p>
      <p style={{ fontSize: "60%", backgroundColor: "white" }}>
        by LazaroFilm - last update: Oct 8 11:49 PM
      </p>
    </div>
  );
};

export default App;
