function removeChar(str) {
  //You got this!
  //use condtional to check if string has at the very least two characters
  if (str.length >= 2) {
    // if there is two characters, use method substring to remove first character (at index 0) and last character using str.length using "-1"
    return str.substring(1, str.length - 1);
  } else {
    //if there is no characters at the very least two return an empty string
    return "";
  }
}
