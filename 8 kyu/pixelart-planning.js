// To help decide those things you've decided to write a function, is_divisible() that will tell you whether a wall of a certain length can exactly fit an integer number of pixels of a certain length.

// Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters. It should return True if you can fit an exact number of pixels on the wall, otherwise it should return False. For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False.

// Note: you don't need to use an if statement here. Remember that in Python an expression using the == comparison operator will evaluate to either True or False:

function isDivisible(wallLength, pixelSize){
  const num = (wallLength/pixelSize)
  return Number.isInteger(num)
}

function isDivisible(wallLength, pixelSize){
  return wallLength % pixelSize === 0
}

console.log(isDivisible(1209,3))