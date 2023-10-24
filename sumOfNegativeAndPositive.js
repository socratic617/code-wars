function countPositivesSumNegatives(input) {
  if (input === null) return [];
  if (input.filter((n) => n != 0).length == 0) return [];
  let countOfPositives = 0;
  let sumOfNegatives = 0;
  for (const n of input) {
    if (n < 0) sumOfNegatives += n;
    if (n > 0) countOfPositives += 1;
  }
  return [countOfPositives, sumOfNegatives];
}
