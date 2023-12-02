function getMiddle(s) {
  let length = s.length;
  let middle = Math.floor(length / 2)

  if (length % 2 === 0) {
    //if even
    return s[middle - 1] + s[middle]
  } else {
    // if odd
    return s[middle]
  }
}