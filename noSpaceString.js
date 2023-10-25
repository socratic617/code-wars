function noSpace(x) {
  let removeStr = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      removeStr = removeStr + x[i];
    }
  }
  console.log(removeStr);
  return removeStr;
}
