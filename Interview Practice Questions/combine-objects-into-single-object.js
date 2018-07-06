//take in an array of objects and combine into a single object

const object = [{name: 'ryan'}, {hair: 'brown'}, {age: 27}]

function hello (arr) {
  return arr.reduce((obj,e) => {
    obj = {...e, ...obj}
    return obj
  }, {});
}

console.log(hello(object))