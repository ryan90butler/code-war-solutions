//Your task is to make two functions, max and min that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array.

var min = function(list){
    return Math.min(...list)
}

var max = function(list){
return Math.max(...list)
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]))