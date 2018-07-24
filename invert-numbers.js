//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
 let arr = []
 for(let i =0; i<array.length; i++){
   if(array[i] === 0){
     arr.push(array[i])
   }else{
   arr.push(-array[i])
   }
 }
 return arr
}

console.log(invert([1,4,5,-5,-2, 0]))

function invert1(array) {
  return array.map( x => x === 0 ? x : -x);
}

console.log(invert1([1,2,-3,21]))