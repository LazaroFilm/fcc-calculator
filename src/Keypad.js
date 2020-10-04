import React from "react";
// import { Button } from "react-bootstrap";
import "./Keypad.css";

const Keypad = ({ handleKey }) => {
  const CreateButton = ({ id, name }) => {
    return (
      <button id={id} className="keypad" onClick={() => handleKey(id, name)}>
        {name}
      </button>
    );
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td className="btn-dark-grey" style={{ fontSize: "90%" }}>
              <CreateButton id="clear" name="AC" />
            </td>
            <td className="btn-dark-grey">
              <CreateButton id="percent" name="%" />
            </td>
            <td className="btn-dark-grey">
              <CreateButton id="divide" name="÷" />
            </td>
            <td className="btn-dark-grey">
              <CreateButton id="multiply" name="×" />
            </td>
          </tr>
          <tr>
            <td className="btn-light-grey">
              <CreateButton id="seven" name="7" />
            </td>
            <td className="btn-light-grey">
              <CreateButton id="eight" name="8" />
            </td>
            <td className="btn-light-grey">
              <CreateButton id="nine" name="9" />
            </td>
            <td className="btn-orange">
              <CreateButton id="subtract" name="-" />
            </td>
          </tr>
          <tr>
            <td className="btn-light-grey">
              <CreateButton id="four" name="4" />
            </td>
            <td className="btn-light-grey">
              <CreateButton id="five" name="5" />
            </td>
            <td className="btn-light-grey">
              <CreateButton id="six" name="6" />
            </td>
            <td className="btn-orange">
              <CreateButton id="add" name="+" />
            </td>
          </tr>
          <tr>
            <td className="btn-light-grey">
              <CreateButton id="one" name="1" />
            </td>
            <td className="btn-light-grey">
              <CreateButton id="two" name="2" />
            </td>
            <td className="btn-light-grey">
              <CreateButton id="three" name="3" />
            </td>
            <td style={{ height: "120px" }} rowSpan="2" className="btn-orange">
              <CreateButton id="equals" name="=" />
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="btn-light-grey">
              <CreateButton id="zero" name="0" />
            </td>
            <td className="btn-light-grey">
              <CreateButton id="decimal" name="." />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Keypad;
