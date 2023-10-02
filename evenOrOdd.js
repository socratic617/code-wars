function evenOrOdd(number) {
  //if number is divisible by two it is even print even
  //  else if it should be an odd number print odd
  //argument is number in parameter
  // best way is to use arthimitic operator modulo %
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
