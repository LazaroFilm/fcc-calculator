import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Keypad_table from "./Keypad_table";
import Display from "./Display";

const App = () => {
  return (
    <div className="App">
      <div className="Display">
        <Display />
      </div>
      <div className="Keypad">
        <Keypad_table />
      </div>
    </div>
  );
};

export default App;
