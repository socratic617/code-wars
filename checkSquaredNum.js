let isSquare = function (n) {
  //Edge case: anything that is negative is not a squared number
  // conditional check it true if squared
  // conditional check if false and not squared 
  //data type integer
  //create for loop to confirm
  //create a global variable outside for loop
  // return a boolean
  //this seems like O(n) this is linear
  let numchk;
  for (let i = 0; i < n + 1; i++) {
    numchk = n / i;
    if (i === numchk) {
      return true;
    }
  } if (n < 0) {
    return false
  } else if (numchk == 1) {
    return false
  } else {
    return true
  }
}