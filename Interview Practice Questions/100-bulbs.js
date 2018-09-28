// There are 100 light bulbs lined up in a row in a long room. Each bulb has its own switch and is currently switched off. The room has an entry door and an exit door. There are 100 people lined up outside the entry door. Each bulb is numbered consecutively from 1 to 100. So is each person.

// Person No. 1 enters the room, switches on every bulb, and exits. Person No. 2 enters and flips the switch on every second bulb (turning off bulbs 2, 4, 6...). Person No. 3 enters and flips the switch on every third bulb (changing the state on bulbs 3, 6, 9...). This continues until all 100 people have passed through the room.

// What is the final state of bulb No. 64? And how many of the light bulbs are illuminated after the 100th person has passed through the room?

function oneHundredBulbs(bulbNumber){
    const bulbs = [];
    for(k=1;k<=100;k++){
      bulbs[k] = 0
    }
  for(let i=1;i<=100;i++){
    for(let j=i;j<=100;j++){
      if(j % i == 0){
        if(bulbs[j] == 0){
          bulbs[j] = 1
        }else{
          bulbs[j] = 0
        }
      }
    }
  }
  return bulbs[bulbNumber]
}

console.log(oneHundredBulbs(64))