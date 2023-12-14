function filter_list(l) {
  // Return a new array with the strings filtered out
  // return array
  //fileter only nums 
  //this is o of n
  // bc your only pulling out non int numbers 
  let result = []
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] == 'number') {
      result.push(l[i])
    }
  }
  return result
}