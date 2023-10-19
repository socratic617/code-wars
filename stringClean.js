function stringClean(s) {
  // Function will return the cleaned string
  // i want to loop through the string so i will use method .length using a for loop
  // i will identify to not include  numbers in string
  // then i will return  my string without any numeric numbers
  // charAt() used to target numbers
  let result = "";
  for (let i = 0; i < s.length; i++) {
    console.log("char: " + parseInt(s.charAt(i)));
    if (isNaN(parseInt(s.charAt(i)))) {
      result += s.charAt(i);
    }
  }
  console.log(result);
  return result;
}
