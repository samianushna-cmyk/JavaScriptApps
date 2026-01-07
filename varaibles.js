//variables in javsscript
var pname = "realme";
//es6 keywords
let pdescripition = "Hassum product";
const price = 30000;
//drawbacks of var
var pname = "Samsung";
console.log(pname);
for (var i = 1; i <= 10; i++) {
  console.log("inner i value", +i);
}
console.log("Outer value", +i);
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("outer value", +i);
//for (const i = 1; i <= 10; i++) {
//console.log(i);
//}
const pancardnum = 12345;
console.log(pancardnum);
