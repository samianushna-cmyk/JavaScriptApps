//Operators in javascript
//Arithematic Operators
let a = 10; //let is using because no duplicates are allowed further
let b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a % b);
console.log(a / b);
//tricky
console.log(a + b + "hi");
console.log("hi" + a + b);
console.log(a + "hi" + b);
console.log("20" - "10");
console.log("20" + 10);
console.log("20" * "10");
console.log("20" * 10);
console.log("20" / "2");
console.log("20" / 2);
console.log("30" / "hi");
console.log("30" / "0.5");
//Assignment operators
let c = 20;
let d = 15;
console.log((c += d));
console.log((c -= d));
console.log((c *= d));
console.log((c /= d));
//comparision operators
let e = 20; //literal syntax
let f = new Number(20); //object syntax
console.log(b == e);
console.log(b === e);
console.log(b == f);
console.log(b === f);
console.log(e > f);
console.log(e < f);
console.log(e >= f);
console.log(e <= f);
//logical operators
let g = 10;
let h = 20;
console.log(g < 10 && h > 1);
console.log(g > 10 || h < 5);
//bitwise operatoes
let i = 10;
let j = 20;
console.log(i & j);
console.log(i | j);
console.log(i ^ j);
console.log(~i);
console.log(i << 2);
console.log(j >> 3);
//ternary operators
const age = 29;
const allowed = age >= 18 ? "yes" : "no";
console.log(allowed);
