function likes(names) {
  // TODO
  // write 5 conditionals for conditions 
  // use template literal for names 
  //EDGE case: for more than 4 names 
  // create variable for difference

  if (names.length === 0) {
    return 'no one likes this'
  }
  else if (names.length === 1) {
    return `${names[0]} likes this`
  }
  else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  }
  else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  else {
    let morePpl = names.length - 2
    return `${names[0]}, ${names[1]} and ${morePpl} others like this`
  }
}