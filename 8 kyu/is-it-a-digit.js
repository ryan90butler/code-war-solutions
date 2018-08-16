// Implement String#digit?, which should return true if given object is a digit (0-9), false otherwise.

function digit() {
return /^\d$/g.test(this)
};

console.log(digit(7))