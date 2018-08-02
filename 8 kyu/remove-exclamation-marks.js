// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/ug, '');
}

console.log(removeExclamationMarks('hi world! its me!'))