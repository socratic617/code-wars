function arrayPlusArray(arr1, arr2) {
  let flattenArr = [...arr1, ...arr2];
  return flattenArr.reduce((total, n) => {
    return total + n;
  }, 0);
}

//thinking about flattening array and making them one array and apply .reduce method to add all elements of index
// arr1= [1, 2, 3] arr2 = [4, 5, 6]
// resultArray = [1, 2, 3, 4, 5, 6]
// return [...arr1, ...arr2].reduce()
