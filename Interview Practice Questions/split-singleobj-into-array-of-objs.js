// take an object, make the object an array where the key and property are its own object.

const testObj = {
  name: 'Ryan',
  state: 'Utah',
  height: '6',
  newObj: {
    favFood: 'tacos',
    sport: 'football'
  }
}

function objToArry (obj) {
  let hi = [];
  Object.keys(obj).forEach(key => {
    if(typeof obj[key] === 'Object'){
      if(!obj[key].length === 0) {
        objToArry(obj[key])
      }
      else hi.push({[key]: obj[key]})
    }
    hi.push({[key]: obj[key]})
  })
  return hi
}

console.log(objToArry(testObj))