function flickSwitch(arr) {
  //proof of concept: deliver boolean (true) then go from there
  let resultBoo = [];
  let valueToReturn = true;
  //   let flick = false;
  for (let i = 0; i < arr.length; i++) {
    //if thee current elemnt is flick then we need to switch the value to return
    if (arr[i] == "flick") {
      valueToReturn = !valueToReturn; // when it is not valueToReturn , return the opposite
    }
    resultBoo.push(valueToReturn);
  }

  return resultBoo;
}
