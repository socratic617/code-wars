function descendingOrder(n) {
  //...
  //its currently a datatype integer 
  //need to convert to toString('')
  // then use .split to cobert into array
  //use mtehod .sort 
  //reverse( ) mrthod 
  // join it back on  the screen 
  return parseInt(n.toString().split('').sort().reverse().join(''))
}