function makeNegative(num) {
  // Code?
  //you have to turn the arguement "num" into a negative but be mindful  it may already be negative
  // in this case you have to use conditionals
  // make sure its less than zero to confirm if its already negative
  if (num <= 0) return num;
  // if the num is positve convert it to a negative number
  return num * -1;
}
