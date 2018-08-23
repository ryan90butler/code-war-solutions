// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:

// onesComplement(1001) = 0110
// onesComplement(1001) = 0110

function onesComplement(n) {
 const newNum = []
 let newStr = n.split('')
  for (let i=0;i<newStr.length;i++){
    if(newStr[i] === '1'){
      newNum.push('0')
    }
    if(newStr[i] ==='0'){
      newNum.push('1')
    }
  }
  return newNum.join('')
};

console.log(onesComplement('11100011'))