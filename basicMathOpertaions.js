function basicOp(operation, value1, value2) {
  // Code
  // you could use a switch case
  // each switch case uses 4 diff operations
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 0;
  }
}