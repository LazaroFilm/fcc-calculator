import React, { memo } from "react";
// import { Button } from "react-bootstrap";
import "./Keypad.css";

const Keypad = memo(({ handleKey, keys }) => {
  const CreateButton = ({ id }) => {
    return (
      <button id={id} className="keypad" onClick={() => handleKey(id)}>
        {keys[id][1]}
      </button>
    );
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td className="btn-dark-grey" style={{ fontSize: "90%" }}>
              <CreateButton id="clear" />
            </td>
            <td className="btn-dark-grey" style={{ fontSize: "90%" }}>
              <CreateButton id="backspace" />
            </td>
            <td className="btn-dark-grey">
              <CreateButton id="divide" />
            </td>
            <td className="btn-dark-grey">
              <CreateButton id="multiply" />
            </td>
          </tr>
          <tr>
            <td className="btn-light-grey">
              <CreateButton id="seven" />
            </td>
            <td className="btn-light-grey">
              <CreateButton id="eight" />
            </td>
            <td className="btn-light-grey">
              <CreateButton id="nine" />
            </td>
            <td className="btn-orange">
              <CreateButton id="subtract" />
            </td>
          </tr>
          <tr>
            <td className="btn-light-grey">
              <CreateButton id="four" />
            </td>
            <td className="btn-light-grey">
              <CreateButton id="five" />
            </td>
            <td className="btn-light-grey">
              <CreateButton id="six" />
            </td>
            <td className="btn-orange">
              <CreateButton id="add" />
            </td>
          </tr>
          <tr>
            <td className="btn-light-grey">
              <CreateButton id="one" />
            </td>
            <td className="btn-light-grey">
              <CreateButton id="two" />
            </td>
            <td className="btn-light-grey">
              <CreateButton id="three" />
            </td>
            <td style={{ height: "120px" }} rowSpan="2" className="btn-orange">
              <CreateButton id="equals" />
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="btn-light-grey">
              <CreateButton id="zero" />
            </td>
            <td className="btn-light-grey">
              <CreateButton id="decimal" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
});

export default Keypad;
