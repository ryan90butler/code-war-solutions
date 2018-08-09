// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order.

function inAscOrder(arr){
  for (let i=1; i<arr.length; i++){
    if(arr[i-1] > arr[i]){
      return false;
    }
  }
  return true;
}

console.log(inAscOrder([100,44,3,4]))

function inAscOrder(arr) {
  return arr.every((e,i)=>i<arr.length-1?e<arr[i+1]:true);
}
