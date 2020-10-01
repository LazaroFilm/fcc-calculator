import React from "react";
// import { Button } from "react-bootstrap";
import "./Keypad_table.css";

const createButton = (key) => {
  return <button className="btn-custom">{key}</button>;
};

function Keypad_table() {
  return (
    <>
      <table>
        <tr>
          <td className="btn-dark-grey">{createButton(`AC`)}</td>
          <td className="btn-dark-grey">{createButton(`%`)}</td>
          <td className="btn-dark-grey">{createButton(`÷`)}</td>
          <td className="btn-dark-grey">{createButton(`×`)}</td>
        </tr>
        <tr>
          <td className="btn-light-grey">{createButton(`7`)}</td>
          <td className="btn-light-grey">{createButton(`8`)}</td>
          <td className="btn-light-grey">{createButton(`9`)}</td>
          <td className="btn-orange">{createButton(`-`)}</td>
        </tr>
        <tr>
          <td className="btn-light-grey">{createButton(`4`)}</td>
          <td className="btn-light-grey">{createButton(`5`)}</td>
          <td className="btn-light-grey">{createButton(`6`)}</td>
          <td className="btn-orange">{createButton(`+`)}</td>
        </tr>
        <tr>
          <td className="btn-light-grey">{createButton(`1`)}</td>
          <td className="btn-light-grey">{createButton(`2`)}</td>
          <td className="btn-light-grey">{createButton(`3`)}</td>
          <td rowspan="2" className="btn-orange">
            {createButton(`=`)}
          </td>
        </tr>
        <tr>
          <td colspan="2" className="btn-light-grey">
            {createButton(`0`)}
          </td>
          <td className="btn-light-grey">{createButton(`.`)}</td>
        </tr>
      </table>
    </>
  );
}

export default Keypad_table;
