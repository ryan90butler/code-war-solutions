

function greaterPart(test){
  const newStr = String(test)
  return parseInt(newStr.split('.').sort((a,b)=>b-a)[0],10)
}
console.log(greaterPart(100.211))


function addArr(arr){
  return arr.reduce((a,b)=>a+b,0)
}

console.log(addArr([9,4]))