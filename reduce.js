function grow(x) {
  //create variable to store sum
  // will use method .reduce() to multiply each value at each index from Left to Right

  let result = x.reduce((a, b) => {
    //I will multiply a param (accumaltor) by b param(current value)
    return a * b;
  });
  //return total sum from variable result
  return result;
}
