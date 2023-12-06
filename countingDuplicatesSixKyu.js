function duplicateCount(text){
  //@param strings capital a lower or capital
  //@return return number 
  //create a variable that will hold the count 
  // use for loop to check if there are any reoccuring characters/sybols
  
  //create hash table build hash table same way i built loop 
  // build hash table and exists 
  //loop thru
  //increment count if u see that key occur again 
  text = text.toLowerCase()
  let seen = []
  let duplicates =[]
  for(let character of text){
    if((character >= 'a' && character <= 'z')||(character >= '0' && character <= '9') ){
      if(seen.includes(character)){
        if(!duplicates.includes(character)){
          duplicates.push(character)
        }
      } else {
        seen.push(character)
      }
    }
  } 
  return duplicates.length
}