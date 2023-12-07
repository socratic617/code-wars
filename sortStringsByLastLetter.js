// Given a string of words(x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.



// PSUEDO CODE
// create a function 
// create two variables: 
// one to store array
// second to store sorted arr



//Solution One: 
function last(x) {
  let arr1 = x.split(' ')
  let arr2 = arr1.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
  return arr2
}
console.log(last('Erik Ro Ayman'))


// Solution Two: 
function last(x) {
  //split the string into an array of words
  let arr1 = x.split(' ')
  //sort array of words 
  let arr2 = arr1.sort(function(a, b){
    if(a[a.length -1] > b[b.length - 1])
    return -1;
  return 0;
  })
  //Return the sorted array of words 
  return arr2
}
console.log(last('Erik Ro Ayman'))

