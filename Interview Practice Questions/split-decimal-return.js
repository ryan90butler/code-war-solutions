

function greaterPart(test){
  const newStr = String(test)
  const newNum = newStr.split('.')
  const num = newNum.map(function (x) {
    return Number(x);
    });
  if(num[0]>num[1]){
    return num[0]
  }
  if(num[1]>num[0]){
    return num[1]
  }else{
    return test
  }
}
console.log(greaterPart(43.79))