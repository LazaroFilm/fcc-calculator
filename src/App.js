import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("initial display");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This will become a calculator... at some point.</p>
        <p>this is displaying: {display}</p>
        <button onClick={() => setDisplay("updated display")}>Click me!</button>
        <button onClick={() => setDisplay("initial display")}>Reset</button>
        <p>{3 + 5 * 6 - 2 / 4}</p>
      </header>
    </div>
  );
}

export default App;
