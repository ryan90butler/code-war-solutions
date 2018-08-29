// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
  if(sperm === 'XY'){
    return "Congratulations! You're going to have a son.";
  }
  return "Congratulations! You're going to have a daughter.";
}

console.log(chromosomeCheck('XY'))