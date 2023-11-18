function disemvowel(str) {
  //create variable for new string
  // use for loop to go through string 
  // make sure to not include a e i o u 
  // return newStr
  // 
  let newStr = ""
  // str ="blah"
  for(let i = 0; i < str.length; i++){
    let c = str[i].toLowerCase() 
    //i=0 c=b  
    // i=1 c='l' 
    if(c != 'a' && c != 'e' && c != 'i' && c != 'o' && c != 'u'){
      console.log("inside for loop for i  :", str[i], "c :", c)
      
      newStr += str[i]
      
    }
  }
  return newStr;
}