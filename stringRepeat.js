function repeatStr(n, s) {
  // create a variable to store result of s(string) repeated exactly n(integer) times
  let result = s;
  //create a for loop to go through n  number of times but no more than n number of times
  for (i = 1; i < n; i++) {
    // in the loop you are adding s to your result each time
    result += s;
  }
  // then you will return your final result.
  return result;
}
