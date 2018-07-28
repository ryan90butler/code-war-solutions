// Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.

var isAnagram = function(test, original) {
var newTest = test.toLowerCase().split('').sort().join('')
var newOriginal = original.toLowerCase().split('').sort().join('')
return (newTest == newOriginal)? true : false
};

console.log(isAnagram('foefet', 'toffee'))