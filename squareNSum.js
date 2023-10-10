function squareSum(numbers) {
  // create an array to hold the numbers for the array (doesnt need brackets bc numbers already holds the array )
  let arr = numbers;
  //create variable to hold sum 
  //since we dont know what it is yet we'll assign it 0
  let sum = 0;
  console.log("Creating variable " + sum);
  //use .map method bc it creates a new array populated with the results of calling an arrow function on every element of the input array
  const result = arr.map((x) => x ** 2);
  console.log("creating variable" + result);
  //after you compute the results for each array element you want to add them all together with a loop
  for (let i = 0; i < result.length; i++) {
    // then you add all the elements stored in the indexs of the array together to get the sum and store it in the sum variable
    sum += result[i];
    console.log("creating the sum of adding index elements together" + sum);
  }
  // now that you finally know the result after adding all of them together return the sum
  return sum;
}
