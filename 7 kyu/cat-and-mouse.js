// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

function catMouse(x){
 for(let i=0; i<=x.length; i++) {
  if(x[i] === "C" && x[i+3]==='m' || x[i-3]==='m'){
    return "Caught!"
  }else {
    return 'Escaped!'
  }
 }
}

console.log(catMouse('C....m'))