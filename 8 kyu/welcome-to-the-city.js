// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space betweeen each, and the length of the name array in test cases will vary.

function sayHello( name, city, state ) {
  const formatName = name[0]+' '+name[1]
 return 'Hello, '+formatName+'! '+ 'Welcome to '+city+', '+state+'!'
}

console.log(sayHello(['ryan', 'butler'], 'provo', 'utah'))