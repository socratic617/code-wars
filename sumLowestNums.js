function sumTwoSmallestNumbers(numbers) {
  // data type return : integer
  // param: array
  // create lowest2 variable 
  // create a for loop to iterate through array to find lowest nums
  // create ordered array with .sort method and arrow funciton
  // Ex: ((a,b) => a-b)
  // use opperand + to get sum
  let orderlist = numbers.sort((a, b) => a - b)
  console.log('orderlist :', orderlist)
  let lowest2 = orderlist[0] + orderlist[1]
  console.log('lowest2 :', lowest2)
  return lowest2
}