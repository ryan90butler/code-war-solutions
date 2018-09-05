// Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example, if n = 10:

// return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function monkeyCount(n) {
  const num = []
  for(let i=1;i<=n;i++){
    num.push(i)
  }
  return num
  }

  console.log(monkeyCount(20))