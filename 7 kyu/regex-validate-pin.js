// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
  if(pin.length === 4 ||  pin.length === 6 ) {
    if(/^[0-9]+$/.test(pin))  {
      return true;
    }else {return false;}
  }else {
      return false;
      }
}

console.log(validatePIN('1135'))