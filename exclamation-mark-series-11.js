// Replace all vowel to exclamation mark in the sentence. 'aeiouAEIOU' is vowel.

function replace(s){
  return s.replace(/[aeiouAEIOU]/g,'!');
}

console.log(replace('aeeeat3t35gsioil'))