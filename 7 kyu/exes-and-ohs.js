// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let x = [];
  let o =[];
  str = str.toLowerCase()
  for (let i=0;i<=str.length;i++){
    if(str[i] == 'x')
    x.push(str[i])
    if(str[i] =='o'){
      o.push(str[i])
    }
  }
 if (x.length == o.length){
   return true
 }
   return false
}

function XO1(str){
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

console.log(XO1('helloxOx'))