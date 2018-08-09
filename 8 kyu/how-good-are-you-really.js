// You got an array with your colleges' points. Now calculate the average to your points!
// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
  const classAverage =
    classPoints.reduce((total, value) => total + value, 0) / classPoints.length
  return yourPoints > classAverage
}

console.log(betterThanAverage([3,5,76,34], 9))