function highAndLow(numbers){
  // ...
  //create new variable to store new string for result 
  //return result string w/ highest space lowest integer in string 
  //result should only return 2 numbers from string. ("highetst, lowest" )
  //use for loop to iterate through string of numbers to see which is the highest num
  //write conditionals to cover edge case 
  //edge case if one input for test case only like one number will always have output of two nums
  // test case: numbers = "1 2 6 10 -1"
  //return resultStr//prints "-1 10"
 // use method .split
// var flowers = 'Rose, Sunflower, Orchid'
// flowers.split(',') // => ['Rose', 'Sunflower', 'Orchid']  ** splits a string into an array by the given dilimeter
// flowers.split('')  // => ['R','o','s','e',','S'...etc.]   ** an empty delim will split into individual characters
  
  let resultStr = numbers.split(" ")
  console.log('resultStr :')
  console.log(resultStr)
  console.log("********************************************")
  let highest = resultStr[0]
  let lowest = resultStr[0]
  let result = ''

  for(let i= 0; i < resultStr.length; i++){
    console.log('i :' , i)
    console.log(' parseInt(i) :',  parseInt(i))
    console.log(' highest :',  highest)
    
     // string > integer
    if(parseInt(resultStr[i]) > highest){
      highest = parseInt(resultStr[i])
      
      console.log('highest(inside for loop) :')
      console.log(highest)
      console.log("********************************************")
    }
  if(parseInt(resultStr[i]) < lowest){
    lowest = parseInt(resultStr[i])
    console.log('lowest(inside for loop) :')
    console.log(lowest)
    console.log("********************************************")
    }
    
    result = highest + ' ' + lowest
    console.log('result after concat:')
    console.log(result)
    console.log("********************************************")
    
    }
  
   console.log('final highest result :' )
  console.log(highest)
  console.log('final lowest result :' )
  console.log(lowest)
  return result;
}