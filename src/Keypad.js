import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Keypad.css";

function Keypad() {
  return (
    <>
      <div
        className="btn-group-vertical ml-5 mt-5"
        role="group"
        aria-label="Basic example"
      >
        {/* <input className="text-center form-control-lg mb-2" id="code" /> */}
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            C
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            /
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            *
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            b
          </button>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            1
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            2
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            3
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            -
          </button>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            4
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            5
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            6
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            +
          </button>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            7
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            8
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            9
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            =
          </button>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom2"
          >
            0
          </button>
          {/* <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            0
          </button> */}
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            .
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            =
          </button>
        </div>
      </div>
      <br />

      <div
        className="btn-group-vertical ml-4 mt-4"
        role="group"
        aria-label="Basic example"
      >
        <div className="btn-group">
          <input className="text-center form-control-lg mb-2" id="code" />
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-outline-secondary py-3">
            1
          </button>
          <button type="button" className="btn btn-outline-secondary py-3">
            2
          </button>
          <button type="button" className="btn btn-outline-secondary py-3">
            3
          </button>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-outline-secondary py-3">
            4
          </button>
          <button type="button" className="btn btn-outline-secondary py-3">
            5
          </button>
          <button type="button" className="btn btn-outline-secondary py-3">
            6
          </button>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-outline-secondary py-3">
            7
          </button>
          <button type="button" className="btn btn-outline-secondary py-3">
            8
          </button>
          <button type="button" className="btn btn-outline-secondary py-3">
            9
          </button>
          <button type="button" className="btn btn-outline-secondary py-3">
            9
          </button>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-outline-secondary py-3">
            &lt;
          </button>
          <button type="button" className="btn btn-outline-secondary py-3">
            0
          </button>
          <button type="button" className="btn btn-primary py-3">
            Go
          </button>
        </div>
      </div>
    </>
  );
}

export default Keypad;
