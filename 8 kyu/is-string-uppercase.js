// Create a method is_uppercase() to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}

console.log(isUpperCase('hello'))