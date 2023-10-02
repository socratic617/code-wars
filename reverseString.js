function solution(str) {
  //the string needs to be reversed so i need to use method, .length and use a loop
  let reverseString = "";
  //
  for (let i = str.length - 1; i >= 0; i--) {
    // Example:str= hello then pass string into for loop and if we pass it in and then
    // str.length -1 = 4
    // i =4
    reverseString += str[i];
    // str = hello take the variable string and look up what the index is for i
    //reversString = O
  }
  //return reverseString
  return reverseString;
}
