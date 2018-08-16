// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
  const kept = []
  for (let i=0; i<arr.length ;i++){
    if([i] %2 ==0){
      kept.push(arr[i])
    }
  }
  return kept
}

console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']))