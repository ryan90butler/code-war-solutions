// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

// Example
// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be 96

function seatsInTheater(nCols, nRows, col, row) {
  const newR = nRows - row
  const newC = nCols - col
  return (newC +1) * newR
}

console.log(seatsInTheater(16,11,5,3))