function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  let sum = marks.reduce((a, b) => {
    return a + b;
  });
  return Math.floor(sum / marks.length);
}
