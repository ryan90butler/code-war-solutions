// Create a function with two arguments that will return a list of length (n) with multiples of (x).

function countBy(x, n) {
  var z = [];

  for (let i=1;i<=n;i++){
    z.push(i * x)
  }
  return z;
}

console.log(countBy(2,10))