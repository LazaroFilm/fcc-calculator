import { evaluate, format } from "mathjs";

const keys = {
  one: [`1`, "1", "num"],
  two: [`2`, "2", "num"],
  three: [`3`, "3", "num"],
  four: [`4`, "4", "num"],
  five: [`5`, "5", "num"],
  six: [`6`, "6", "num"],
  seven: [`7`, "7", "num"],
  eight: [`8`, "8", "num"],
  nine: [`9`, "9", "num"],
  zero: [`0`, "0", "num"],

  decimal: [`.`, ".", "dot"],

  add: [`+`, "+", "oper"],
  subtract: [`-`, "–", "oper"],
  multiply: [`*`, "×", "oper"],
  divide: [`/`, "÷", "oper"],

  equals: [`=`, "=", "equal"],

  clear: [`ac`, "AC", "clear"],
  backspace: [`bksp`, "⌫", "bksp"],
};
const initialState = {
  calc: "0",
  result: "0",
  prevType: "clear",
  twoBack: "clear",
};
const reducer = function (state, id) {
  const keyType = keys[id][2];
  console.log(`key: ${id}`);
  switch (keyType) {
    case "num":
      return handleNumber(state, id);
    case "oper":
      return handleOper(state, id);
    case "dot":
      return handleDot(state);
    case "equal":
      return handleEqual(state);
    case "bksp":
      return handleBksp(state);
    default:
      return handleClear(state);
  }
};
const handleNumber = (state, id) => {
  let { calc, result, prevType } = state;
  const keySym = keys[id][0];
  if (prevType === "num" || prevType === "dot") {
    if (result[0] === "0" && result[1] !== ".") {
      return {
        calc: keySym,
        result: keySym,
        twoBack: prevType,
        prevType: "num",
      };
    } else {
      return {
        calc: calc + keySym,
        result: result + keySym,
        twoBack: prevType,
        prevType: "num",
      };
    }
  } else if (prevType === "clear" || prevType === "equal") {
    return {
      calc: keySym,
      result: keySym,
      prevType: "num",
    };
  } else if (prevType === "oper") {
    return {
      calc: calc + keySym,
      result: keySym,
      twoBack: prevType,
      prevType: "num",
    };
  }
};
const handleDot = (state) => {
  let { calc, result, prevType } = state;
  if (result[result.length - 1] === ".") {
    return {
      calc: calc,
      result: result,
      twoBack: prevType,
      prevType: "dot",
    };
  } else if (result.includes(".")) {
    return {
      calc: calc,
      result: result,
      twoBack: prevType,
      prevType: "dot",
    };
  } else {
    return {
      calc: calc + ".",
      result: result + ".",
      twoBack: prevType,
      prevType: "dot",
    };
  }
};
const handleOper = (state, id) => {
  let { calc, result, prevType } = state;
  const keySym = keys[id][0];
  const keyName = keys[id][1];
  //! Test 0- fails change behavior after reset.
  if (prevType === "equal") {
    return {
      calc: result + keySym,
      result: result + keyName,
      twoBack: prevType,
      prevType: "oper",
    };
  } else if (prevType === "dot") {
    return {
      calc: calc.slice(0, -1) + keySym,
      result: result.slice(0, -1) + keyName,
      twoBack: prevType,
      prevType: "oper",
    };
  } else if (id === "subtract") {
    return {
      calc: calc + keySym,
      result: result + keyName,
      twoBack: prevType,
      prevType: "oper",
    };
  } else {
    return {
      calc: calc.replace(/([+\-*/]+)$/, "") + keySym,
      result: result.replace(/([+\–×÷]+)$/, "") + keyName,
      twoBack: prevType,
      prevType: "oper",
    };
  }
};
const handleClear = () => {
  return {
    ...initialState,
  };
};
const handleEqual = (state) => {
  let { calc, prevType } = state;
  if (prevType === "dot") {
    return {
      calc: "=",
      result: format(evaluate(calc.slice(0, -1)), { precision: 14 }),
      twoBack: "equal",
      prevType: "equal",
    };
  }
  return {
    calc: "=",
    result: format(evaluate(calc), { precision: 14 }),
    twoBack: "equal",
    prevType: "equal",
  };
};
const handleBksp = (state) => {
  let { calc, result, twoBack } = state;
  //! needs to work with prevType num only
  //! check that there is a prevType existing
  //! make sure there is at least one char in calc and result
  if (result.slice(0, -1).length <= 1) {
    return {
      calc: "0",
      result: "0",
      prevType: twoBack,
    };
  } else if (calc.slice(0, -1).length <= 1) {
    return {
      calc: "0",
      result: "0",
      prevType: twoBack,
    };
  } else {
    return {
      calc: calc.slice(0, -1),
      result: result.slice(0, -1),
      prevType: twoBack,
    };
  }
};
export { keys, initialState, reducer };
