function array(string) {
  // TODO
  let resultStr = ""
  const sequences  = string.split(",")//whenever you see a comma create a new element using "," aka seperator
  console.log("my sequences ",  sequences)
  
  if(sequences.length < 3){// this covered all the edges cases ,  has to be more than 2 elements in the array
    return null //
  }
  
  
  sequences.shift()// remove first element from array
  sequences.pop() //removes the last element from an array 
  
//remember you need a catcher for your return value
  const joinedSeq = sequences.join(" ")// join the array back together without commas and with spaces 
  
  console.log("joined seq w/ spaces :  " , joinedSeq)
  
  
  
  return joinedSeq // this is what contains my final answer
}


//"1,2,3" -> ["1","2","3"] 