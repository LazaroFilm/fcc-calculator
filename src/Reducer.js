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
  subtract: [`-`, "-", "oper"],
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
    if (calc === "-") {
      return {
        calc: "-" + keySym,
        result: "–" + keySym,
        prevType: "num",
      };
    } else {
      return {
        calc: calc + keySym,
        result: keySym,
        twoBack: prevType,
        prevType: "num",
      };
    }
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
  if (prevType === "equal") {
    return {
      calc: result + keySym,
      result: result + keySym,
      twoBack: prevType,
      prevType: "oper",
    };
  } else if (prevType === "dot") {
    return {
      calc: calc.slice(0, -1) + keySym,
      result: result.slice(0, -1) + keySym,
      twoBack: prevType,
      prevType: "oper",
    };
  } else if (id === "subtract") {
    if (calc === "0") {
      return {
        calc: keySym,
        result: keySym,
        prevType: "oper",
      };
    } else {
      return {
        calc: calc + keySym,
        result: result + keySym,
        twoBack: prevType,
        prevType: "oper",
      };
    }
  } else {
    return {
      calc: calc.replace(/([+\-*/]+)$/, "") + keySym,
      result: result.replace(/([+\-*/]+)$/, "") + keySym,
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
      calc: calc.slice(0, -1) + " =",
      result: format(evaluate(calc.slice(0, -1)), { precision: 8 }),
      twoBack: "equal",
      prevType: "equal",
    };
  }
  return {
    calc: calc + " =",
    result: format(evaluate(calc), { precision: 8 }),
    twoBack: "equal",
    prevType: "equal",
  };
};
const handleBksp = (state) => {
  let { calc, result } = state;
  let getType = (sym) => {
    let type = sym;
    for (let id in keys) {
      type = type.replace(keys[id][0], keys[id][2]);
    }
    console.log(`Replace: ${type}`);
    return type;
  };
  const restoreResult = (calc) => {
    if (calc === "0") {
      console.log("all gone");
      return "allgone";
    } else if (result.length <= 1) {
      console.log("do the thing");
      let i = calc.length - 2;
      let restoredResult = calc[i];
      console.log(calc[i]);
      console.log(calc[i - 1]);
      // chars of same type
      while (getType(calc[i]) === getType(calc[i - 1]) && i > 0) {
        console.log(
          `i= ${i} -- type i= ${getType(calc[i])} -- type i-1= ${getType(
            calc[i - 1]
          )}`
        );
        restoredResult = calc[i - 1] + restoredResult;
        console.log(`while loop: ${restoredResult}`);
        i--;
      }
      console.log(`now i is: ${i}`);
      return restoredResult;
    } else {
      console.log("all good");
      return result.slice(0, -1);
    }
  };

  if (calc.length <= 1) {
    return { ...initialState };
  } else if (result.length <= 2) {
    console.log("more than 2");
    return {
      calc: calc.slice(0, -1),
      result: restoreResult(calc),
      prevType: getType(calc[calc.length - 2]),
    };
  } else {
    console.log("last resort");
    return {
      calc: calc.slice(0, -1),
      result: result.slice(0, -1),
      prevType: getType(calc[calc.length - 2]),
    };
  }
  //! needs to work with prevType num only
  //! check that there is a prevType existing
  //! make sure there is at least one char in calc and result
  // if (result.slice(0, -1).length <= 1) {
  //   return {
  //     calc: "0",
  //     result: "0",
  //     prevType: twoBack,
  //   };
  // } else if (calc.slice(0, -1).length <= 1) {
  //   return {
  //     calc: "0",
  //     result: "0",
  //     prevType: twoBack,
  //   };
  // } else {
  //   return {
  //     calc: calc.slice(0, -1),
  //     result: result.slice(0, -1),
  //     prevType: twoBack,
  //   };
  // }
};
export { keys, initialState, reducer };
