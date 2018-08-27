// You have to write a function that accepts three parameters: cap is the amount of people the bus can hold excluding the driver, on is the number of people on the bus, and wait is the number of people waiting to get on to the bus. If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
  if(on+wait <= cap){
    return 0
  }
  const gross = cap - (on+wait)
  return on - (gross + on)
}

function enough(cap, on, wait) {
  return (on+wait > cap) ? on+wait-cap : 0;
}

console.log(enough(100,60,50))