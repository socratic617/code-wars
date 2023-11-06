function findMultiples(integer, limit) {
  //create variable to store final array
  let resultArr = [];
  //create for loop to start at integer provided,
  //can not be more then the limit but can be equal to it,
  //add to i by multiple of the starting int
  for (let i = integer; i <= limit; i += integer) {
    //use method .push() to add item at end of resultArr
    resultArr.push(i);
  }
  return resultArr;
}
