class SmallestIntegerFinder {
  findSmallestInt(args) {
    console.log("args: " + args);
    //create a variable to store small integer and assign it 0
    let smallInt = args[0];
    console.log("this is when i create smallInt " + smallInt);
    //create a loop to go through the array.
    //Remember to use method .length to select each element at each index
    for (let i = 0; i < args.length; i++) {
      console.log("i: " + i);
      //Inside loop code block check for condition , element of index, compared to smallInt variable
      // Create a condition using if statement saying if smallInt is greater than element of Index
      console.log("args[i]: " + args[i]);
      console.log("smallInt: " + smallInt);
      if (args[i] < smallInt) {
        //After you find out which element at index is smallest set it equal to the variable small int
        smallInt = args[i];
        console.log("in condition" + smallInt);
      }
    }

    console.log("return: " + smallInt);
    //Finally return the element index with the smallest integer within the  class SmallestIntegerFiner function
    return smallInt;
  }
}
