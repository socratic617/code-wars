function fakeBin(x) {
  let realBin = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < "5") {
      realBin += "0";
    } else {
      realBin += "1";
    }
  }
  return realBin;
}
