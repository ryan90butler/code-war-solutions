// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

function removeSmallest(numbers) {
  if (numbers.length >= 1){
    return []
  }else{
  const indexSmallest = 0;
  const smallNum = numbers[0];
  for (let i =0; i<numbers.length; i++) {
    if (numbers[i] < smallNum){
      smallNum = numbers[i];
      indexSmallest = i;
    }
  }
 numbers.splice(indexSmallest,1)
 return numbers
}
}

console.log(removeSmallest([2,3,1,4,65]))