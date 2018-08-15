// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

function feast(beast, dish) {
  if (beast[0] == dish[0]){
    return true
  }
  return false
  }

  console.log(feast('silver', 'daee'))