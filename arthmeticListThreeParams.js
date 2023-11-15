//feedback: look at parts of your for loops and what thye do and what the variables actually mean, in this condition , i and l couldnt compare.
var seqlist = function(first,c,l){
// Thou shalt begin !
// create vairable to return my array arthemtic list
// use method .push (dealing w/ integers)
// for loop
//let i =  sequence "first"
// i+ 1 = 'c'
// l = integer given but one  less than integer 
  let resultArr = []
  console.log('value of l', l)
  
  for (let i = first ; resultArr.length + 1 <= l ; i = i + c ){
    resultArr.push(i)
    console.log("push  ", i )
    console.log("*********************************")
  }
  return resultArr
  console.log(resultArr)
}
 
