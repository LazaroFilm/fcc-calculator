const handleKey = (id) => {
  const keySym = keys[id][0];
  const keyName = keys[id][1];
  // console.log(`Clicking key id=${id} name=${keyName}`);
  if (equalPressed) {
    setCalc("0");
    setResult("0");
    setEqualPressed(false);
    // console.log(`RESET AFTER EQUAL`);
  } else {
    // console.log(`move along`);
    setEqualPressed(false);
  }
  // console.log(`past equal thingy`);
  if (id === "clear") {
    // console.log(`Clear!`);
    setCalc("0");
    setResult("0");
    setEqualPressed(false);
  } else if (id === "equals") {
    // console.log(`Equals =`);
    setEqualPressed(true);
    handleEquals();
  } else if (id === "percent") {
    // console.log(`not yet available`);
    setEqualPressed(false);
  } else {
    if (calc === "0") {
      setCalc(keySym);
      setResult(keyName);
    } else {
      if (numbers.test(keySym)) {
        if (numbers.test(result)) {
          // console.log("adding to number");
          setResult(result.toString() + keyName.toString());
        } else {
          // console.log("starting number");
          setResult(keyName.toString());
        }
        setCalc(calc.toString() + keySym.toString());
      } else {
        setResult(keyName);
        setCalc(calc.toString() + keySym.toString());
      }
    }
  }
};
