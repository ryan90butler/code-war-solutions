// function greaterPart(test){
//   const newStr = String(test)
//   const newNum = newStr.split('.')
//   const num = newNum.map((x)=> parseInt(x, 10));
//   if(num[0]>num[1]){
//     return num[0]
//   }
//   if(num[1]>num[0]){
//     return num[1]
//   }else{
//     return test
//   }
// }

function greaterPart(test){
  const newStr = String(test);
  return Number(newStr.split('.').sort((a,b)=>b-a)[0]);
}

console.log(greaterPart(32.109))

function addArr(arr){
  return arr.reduce((a,b)=>a+b,0)
}

console.log(addArr([92,42]))