// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

const ratings = {
terrible: 0,
poor: 5,
good: 10,
great: 15,
excellent: 20
}

// function calculateTip(amount, rating) {
//   if(ratings.hasOwnProperty(ratings)){
//     return false
//   }
//  return Math.ceil(amount * (ratings[rating.toLowerCase()]/100))
// }
const calculateTip = (amount, rating) =>
  Object.keys(ratings).includes(rating.toLowerCase())
    ? Math.ceil(amount * ratings[rating.toLowerCase()]/100)
    : 'Rating not recognised'

console.log(calculateTip(20, 'Excellent'))