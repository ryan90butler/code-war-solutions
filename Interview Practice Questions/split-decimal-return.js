function greaterPart(test){
  const newStr = String(test)
  const newNum = newStr.split('.')
  const num = newNum.map(function (x) {
    return parseInt(x, 10);
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
