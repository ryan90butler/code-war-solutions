// Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x){
let n = []
x.split('').sort('n');
for (let i =0; i<=x.length; i++){
  if(x[i] === 'n'){
    n.push(x[i])
  }
}
if(n.length>15){
  return "Car Dead"
}else{
  return "Woohoo!"
  }
}

function bumpy(x){
 return x.split('n').length>16?"Car Dead":"WooHoo!"
}

console.log(bumpy('______n___n_'))