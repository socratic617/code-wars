function findAverage(array) {
  // your code here
  if (array.length == 0) {
    return 0;
  }
  let averageArr = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]; // i want this to equal this after this calculation
  }
  averageArr = sum / array.length;
  console.log(averageArr);
  return averageArr;
}
