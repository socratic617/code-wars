// create a function that accepts array of 10integers 
// create an array with index start at 0 and ends at 9 
// return result as string 
// create variable to store string with respective format 
// I will create a for loop to create this array of diff nums 
function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
}