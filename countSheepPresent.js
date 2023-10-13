function countSheeps(arrayOfsheep) {
  // TODO
  //use method .filter
  //to test array filled with elements that pass a test provided by function
  //which is filter through looking for present sheep (true)
  //  using .length method  for each element index
  return arrayOfsheep.filter((sheep) => !!sheep).length;
}
