import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Keypad from "./Keypad";
import Display from "./Display";

const App = () => {
  const [key, setKey] = useState("0");
  const handleKey = (name) => {
    console.log(`TEST SUCCESSFUL from ${name}`);
    setKey(name);
  };

  return (
    <div className="App">
      <p>TEMP DISPLAY: {key}</p>
      <div className="Display">
        <Display key={key} />
      </div>
      <div className="Keypad">
        <Keypad handleKey={handleKey} />
      </div>
    </div>
  );
};

export default App;
