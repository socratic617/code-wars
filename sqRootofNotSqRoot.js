function squareOrSquareRoot(array) {
 let newArr = []
 for (let i =0; i < array.length;  i++){
    console.log("current element: "+array[i])
    console.log("check if sq root: " + Math.sqrt(array[i] ))
   
   //check to see if number has an integer square root
   // used mod on elements of array to check if it has a remainder  
   //i would go into next conditional "else" to get me the number squared
   // I will be using method .push() to add to my newArr array with results
   //lastlly return final result outside of for loop
   if ( Math.sqrt(array[i])%1 == 0 ) { 
    console.log(" in loop : ")
     newArr.push(Math.sqrt(array[i]))
     
   } else {
      newArr.push(array[i] **2)
   }
  
   console.log("result so far : " + newArr)
 }
  
   return newArr
  
}