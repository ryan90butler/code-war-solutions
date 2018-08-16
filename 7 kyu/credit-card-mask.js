// return masked string

function maskify(cc) {
  if (cc.length < 4){
    return cc
  }else{
    const lastFour = cc.slice(-4)
    const first = cc.replace(/[a-z0-9]/ig, '#')
    return first.substr(4) + lastFour
  }
}
console.log(maskify('1e3325'))