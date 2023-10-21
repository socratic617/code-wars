// Sum Numbers
function sum(numbers) {
  "use strict";
  //write a condtional to cover if array is empty
  // using symbol bang '!'  and using .length property to check how long the array is
  if (!numbers.length) {
    //return 0 if nothing is in array as asked
    return 0;
  }
  // create variable to store result when adding up data type numbers in array
  // using method
  let result = numbers.reduce((a, b) => {
    //param a identifies the accumalator and  param b identifies current value
    return a + b;
  });
  // return sum of numbers variable result
  return result;
}
