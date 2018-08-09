// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

function bmi(w,h) {
  if(w/(h*h) <= 18.5) {
    return 'Underweight'
  }
  if(w/(h*h) <= 25) {
    return 'Normal'
  }
  if(w/(h*h) <= 30) {
    return 'Overweight'
  }
  if(w/(h*h) > 30) {
    return 'Obese'
  }
}

console.log(bmi(80,1.80))