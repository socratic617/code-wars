// complete the function
// use . split()
// store in array variable 
// have a variable store final result 
// return datatype array
// datatype we are dealing with string 
// create for loop to go through the array we used .split(string )

function solution(string) {
  let arr = string.split("")
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let bool = arr[i].toUpperCase() === arr[i]
    if (bool == true) {
      result.push(` ${arr[i]}`)
    } else {
      result.push(arr[i])
    }
  }
  console.log(result.join(""))
  return result.join("")
}


//big o notation
// O(n)