// Get the number n (n>0) to return the reversed sequence from n to 1.

const reverseSeq = n => {
  const reverse = []
  for (let i=1; i<=n; i++){
    reverse.push(i)
  }
  return reverse.reverse();
};

console.log(reverseSeq(5))