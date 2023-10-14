var summation = function (num) {
  // Code here
  return num > 1 ? num + summation(num - 1) : num;
};
