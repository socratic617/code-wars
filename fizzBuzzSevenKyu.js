function solution(number){
  // create variable, an array
  //to store a (multiples of 3), b(multiples of 5) , c (multiples of 3 and 5)
   let result = [0,0,0]
   //will start at 1
   // i will not be greater then number
  for(let i = 1; i < number; i++){
    if (i % 3 === 0 && i % 5 ===0) {
      result[2]+= 1 // select the array index of element i want to store the value in and when it meets condition incrementing it by 1 
      console.log('C: '+ i) // to view the number added to my result represented by "+=1"
      console.log('result: '+ result) // to view all value that added to my result incrementing by
      console.log('------------------------') // more readable and easier to see console logs for each A,B,C
    } else if(i % 5 === 0){ 
       result[1]+= 1
       console.log('B: '+ i)
       console.log('result: '+ result)
       console.log('------------------------')
     }else if (i % 3 === 0){
        result[0]+= 1
        console.log('A: '+ i)
        console.log('result: '+ result)
        console.log('------------------------')
     } 
  }
  return result
}


// a = is divisible by 3 
// b = divisible by 5
// c = divisible by 3 and 5