//functions in js
function showMessage() {
  console.log("hi");
}
showMessage();
//with parameters a and b are parameters
function sumofNumbers(a, b) {
  console.log(a + b);
}

sumofNumbers(20, 30); //arguments
//return a value from function
function mulNumbers(a, b) {
  return a * b;
}
let x = mulNumbers(10, 20);
console.log(x);
//es6 new functions
//arrow functions
//without parameters
const arrowDemo = () => {
  console.log("Arrow function demo");
};
arrowDemo();
//arrow function with parameters
const addNumbers = (a, b) => {
  console.log(a + b);
};
addNumbers(10, 20);
//in a simple way
const addNums1 = (a, b) => a + b;
//console.log(20, 30);
let y = addNums1(20, 20);
console.log(y);
//returning values in arrow function
const mulNums1 = (a, b) => {
  return a * b;
};
let z = mulNums1(20, 50);
console.log(z);
//without return
const mulNums = (a, b) => {
  console.log(a * b);
};

let q = mulNums1(20, 50);
console.log(q);
//arrow functions
//rest parameter
let c = (numbers = (a, b, ...c) => {
  console.log(a);
  console.log(b);
  console.log(...c);
});
//let h = numbers(10, 20);
//console.log(h);
numbers(10, 20, 30);
//default parameters
let addNumber = (a, b = 20) => {
  console.log(a + b);
};
addNumber(10, 40);
