// The code provided is supposed replace all the dots . in the specified String str with dashes -

var replaceDots = function(str) {
  return str.replace(/[.]/g, '-');
}

console.log(replaceDots('one.two.three'))