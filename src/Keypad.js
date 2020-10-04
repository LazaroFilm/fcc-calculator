import React from "react";
// import { Button } from "react-bootstrap";
import "./Keypad.css";

const Keypad = ({ handleKey }) => {
  const createButton = (key) => {
    return (
      <button className="keypad" onClick={handleKey}>
        {key}
      </button>
    );
  };

  const CreateButton = ({ name, handleKey }) => {
    return (
      <button className="keypad" onClick={handleKey}>
        {name}
      </button>
    );
  };

  const handleTest = (key) => {
    console.log(`Key SUCCESSFUL from ${key}`);
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td
              id="clear"
              className="btn-dark-grey"
              style={{ fontSize: "90%" }}
            >
              <CreateButton name="AC" handleKey={() => handleKey("AC")} />
            </td>
            <td className="btn-dark-grey">{createButton(`%`)}</td>
            <td id="divide" className="btn-dark-grey">
              {createButton(`÷`)}
            </td>
            <td id="multiply" className="btn-dark-grey">
              {createButton(`×`)}
            </td>
          </tr>
          <tr>
            <td id="seven" className="btn-light-grey">
              {createButton(`7`)}
            </td>
            <td id="eight" className="btn-light-grey">
              {createButton(`8`)}
            </td>
            <td id="nine" className="btn-light-grey">
              {createButton(`9`)}
            </td>
            <td id="subtract" className="btn-orange">
              {createButton(`-`)}
            </td>
          </tr>
          <tr>
            <td id="four" className="btn-light-grey">
              {createButton(`4`)}
            </td>
            <td id="five" className="btn-light-grey">
              {createButton(`5`)}
            </td>
            <td id="six" className="btn-light-grey">
              {createButton(`6`)}
            </td>
            <td id="add" className="btn-orange">
              {createButton(`+`)}
            </td>
          </tr>
          <tr>
            <td id="one" className="btn-light-grey">
              {createButton(`1`)}
            </td>
            <td id="two" className="btn-light-grey">
              {createButton(`2`)}
            </td>
            <td id="three" className="btn-light-grey">
              {createButton(`3`)}
            </td>
            <td
              id="equals"
              style={{ height: "120px" }}
              rowSpan="2"
              className="btn-orange"
            >
              {createButton(`=`, handleKey)}
            </td>
          </tr>
          <tr>
            <td id="zero" colSpan="2" className="btn-light-grey">
              {createButton(`0`)}
            </td>
            <td id="decimal" className="btn-light-grey">
              {createButton(`.`)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Keypad;
