// write a function with signature distribute(m, n) in which m represents candies's number while n represents children's number, the function should return a List(or Array etc. depends on the specific language) which contains the number of candies' each child gains.

// The case m < 0 is equivalent to m == 0.
// If n <= 0 the function should return empty list.
// If the candies is not enough to distribute, you should fill corresponding number with 0.

function distribute(m, n) {
  if(n<1) return [];
  let arr = new Array(n).fill(0)
  for(let i=0;i<m;i++){
    ++arr[i%n]
  }
    return arr
}

console.log(distribute(16,5))