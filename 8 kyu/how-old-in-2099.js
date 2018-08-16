// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

function calculateAge(birthYear,newYear) {
  const age = newYear - birthYear ;

  if (age === 1) {
    return "You are " + age + " year old.";
  } else if (age === 0) {
     return "You were born this very year!";
 } else if ((birthYear > newYear) && (age < 1)) {
     var newAge = age * (-1);
     return "You will be born in " + newAge + " year.";
  } else if ((birthYear > newYear) && (age > 1)) {
     var newAge = age * (-1);
     return "You will be born in " + newAge + " years.";
  } else {
     return "You are " + age + " years old.";
  }
}

  console.log(calculateAge(2109,2108))