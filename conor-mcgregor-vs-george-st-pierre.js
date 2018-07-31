// If the winner is George Saint Pierre he will obviously say:
// "I am not impressed by your performance."
// If the winner is Conor McGregor he will most undoubtedly say:
// "I'd like to take this chance to apologize.. To absolutely NOBODY!"

var quote = function(fighter) {
  var lower = fighter.toLowerCase()
  if (lower == 'george saint pierre') {
    return 'I am not impressed by your performance.'
  } if (lower == 'conor mcgregor'){
    return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
  }
  return lower
};

console.log(quote('conor Mcgregor'))