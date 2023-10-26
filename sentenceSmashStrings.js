function smash(words) {
  let arrSmash = "";
  for (let word of words) {
    if (arrSmash !== "") {
      arrSmash += " ";
    }
    arrSmash = arrSmash + word;
  }
  return arrSmash;
}
