function isIsogram(str) {
  //create a variable to store words in lower case 
  //create for loop to check for repeating letters 
  // return boolean
  //this is linear so this is O(n)
  str = str.toLowerCase()

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i), i + 1) >= 0) {
      return false
    }
  }

  return true
}