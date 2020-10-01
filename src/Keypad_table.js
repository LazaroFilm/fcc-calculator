import React from "react";
// import { Button } from "react-bootstrap";
import "./Keypad_table.css";

const createButton = (key) => {
  return <span className="btn-custom">{key}</span>;
};

function Keypad_table() {
  return (
    <>
      <table>
        <tr>
          <td className="btn-dark-grey">{createButton(`MC`)}</td>
          <td className="btn-dark-grey">{createButton(`%`)}</td>
          <td className="btn-dark-grey">{createButton(`÷`)}</td>
          <td className="btn-dark-grey">{createButton(`×`)}</td>
        </tr>
        <tr>
          <td>{createButton(`7`)}</td>
          <td>{createButton(`8`)}</td>
          <td>{createButton(`9`)}</td>
          <td className="btn-orange">{createButton(`-`)}</td>
        </tr>
        <tr>
          <td>{createButton(`4`)}</td>
          <td>{createButton(`5`)}</td>
          <td>{createButton(`6`)}</td>
          <td className="btn-orange">{createButton(`+`)}</td>
        </tr>
        <tr>
          <td>{createButton(`1`)}</td>
          <td>{createButton(`2`)}</td>
          <td>{createButton(`3`)}</td>
          <td rowspan="2" className="btn-orange">
            {createButton(`=`)}
          </td>
        </tr>
        <tr>
          <td colspan="2" className="btn-wide">
            {createButton(`0`)}
          </td>
          <td>{createButton(`.`)}</td>
        </tr>
      </table>
    </>
  );
}

export default Keypad_table;
