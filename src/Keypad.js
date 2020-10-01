import React from "react";
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
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            C
          </Button>
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            /
          </Button>
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            *
          </Button>
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            b
          </Button>
        </div>
        <div className="btn-group">
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            1
          </Button>
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            2
          </Button>
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            3
          </Button>
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            -
          </Button>
        </div>
        <div className="btn-group">
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            4
          </Button>
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            5
          </Button>
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            6
          </Button>
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            +
          </Button>
        </div>
        <div className="btn-group">
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            7
          </Button>
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            8
          </Button>
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            9
          </Button>
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-customV"
          >
            =
          </Button>
        </div>
        <div className="btn-group">
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom2"
          >
            0
          </Button>
          {/* <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            0
          </Button> */}
          <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            .
          </Button>
          {/* <Button
            type="Button"
            className="btn btn-secondary btn-outline-light py-3 btn-custom"
          >
            =
          </Button> */}
        </div>
      </div>
    </>
  );
}

export default Keypad;
