function firstNonConsecutive (arr) {
  
  console.log(arr)//confimr we are getting all the elements in array
  for(let i = 1; i < arr.length; i++){//start 2nd element of index "let i = 1"
    console.log(arr[i-1] ,arr[i])//shows how to access all elements of array
    if(arr[i-1]+1 !== arr[i] ){//if i add 1 to previous element it should equal my arr[i] aka current element
      // and if it doesnt then i found my first non consecutive number 
      return arr[i]
    }
  }
  return null // yay
}

//this is a programing pattern and we need to be mindufl of what the previous elmeent is 