// A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than maxLength, he simply skipped it and read on.

// Help the teacher figure out how many words the boy has read by calculating the number of words in the text he has read, no longer than maxLength.

// Formally, a word is a substring consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.

function timedReading(maxLength, text) {
  const arr = []
  const newText = text.split(' ');
  for(let i=0;i<newText.length;i++){
    if(newText[i].length<=maxLength){
      arr.push(newText[i])
    }
  }
  return arr.length
}

console.log(timedReading(4, "The Fox asked the stork, 'How is the soup?'"))


function timedReading(maxLength, text) {
  text = text.replace(/[.,?'!]/g, "").split(" ");
  var result = [];
  var count = 0
  for (var i = 0; i < text.length; i++) {
    if (text[i].length <= maxLength && text[i] !== "") {
      result.push(text[i]);
      count++;
    }
  } return count;
}