// Return an array
function fizzbuzz(n)
{
  //return an array
  //values inside array are fizz(multiple of 3), buzz(multiple of 5), fizzbuz(multiple of 3&5)
  //will start at 1 always 
  // create variable to store array
  // use loop to go through 
//   feedback: concise straight to the point when explaining code (but explain more rather than less for interviewer)   
  let result = []
  for(let i = 1; i <= n; i++){
    if( i % 3 === 0 && i % 5 === 0){
     result.push('FizzBuzz' )
      console.log("fizzbuzz : ", i)
      console.log('***************************************************************')
    } else if (i % 5 ===0){ 
      result.push( 'Buzz' )
      console.log("buzz : ",i)
      console.log("*************************************************************** ")
    } else if (i % 3 === 0 ){
      result.push( 'Fizz' ) 
      console.log("fizz : ", i)
      console.log("*************************************************************** ")
    } else {
      result.push(i)
      console.log("*************************************************************** ")
    }
  }
  return result
}
