// You get any card as an argument. Your task is to return a suit of this card.

function defineSuit(card) {
  return {
    '♣' : 'clubs',
    '♦' : 'diamonds',
    '♥' : 'hearts',
    '♠' : 'spades'
  }[card.substr(-1)]
}
console.log(defineSuit('3♠'))