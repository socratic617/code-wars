function countBy(x, n) {
  let z = [];
  for(let i = 1 ; i <= n; i++ ){//n is my cutoff or max
    console.log("i inside for loop", i )// chcekcing to see if my array matches my sample test
    z.push(i*x)// dont need a catcher here bc all you need to do is push the value into array z. All i need to do is multiply my i by x 
  }
  return z;
}
