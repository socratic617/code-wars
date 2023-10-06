function positiveSum(arr) {
  // add value at index to get sum of positive numbers
  // dont add value at index if negative
  // from my tools ill be using variables to get sum
  let sum = 0;
  // from my tools ill be using  for loop
  for (let i = 0; i < arr.length; ++i) {
    // from my tools ill be using  for loop
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  // Now we need to get sum
  return sum;
}
