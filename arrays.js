//arrays in js
//ways to create an array
let pnames = ["lg", "Samsung", "vivo", "realme"]; //literal syntax
console.log(pnames);
let price = [20000, 30000, 50000, 40000]; //literal Syntax
let prices = new Array(20000, 30000, 40000, 50000); //Object Syntax
//to get array values
console.log(pnames[0]); //by index values
//to get values one by one
for (let name of pnames) {
  console.log(name);
}
//using foreach method
let names = pnames;
pnames.forEach((element) => {
  console.log(element);
});
let nam = pnames.forEach((val) => {
  //callback function
  console.log(val);
});
//to add elements in array
//push,unshift,splice
pnames.push("Galaxy");
console.log(pnames);
//unshift is used to add the elements at begining of array
pnames.unshift("poco");
console.log(pnames);
//splice is used to add the elements in the middle of array
pnames.splice(2, 0, "appo", "motto"); //2 is the index position to add the element ,0 is the no need to delete the elements in the index
console.log(pnames);
//delete the elements in the array
//pop, shift,splice ,delete operator is also used to remove the elements in array
pnames.pop();
console.log(pnames);
pnames.shift();
console.log(pnames);
pnames.splice(2, 1); //deleted the 1 element in 2 position.1 describes the no.of elements to be delete
console.log(pnames);
//delete
//delete pnames[3];
//console.log(pnames);
//portion of an array-slice
console.log(pnames.slice(2, 4));
console.log(pnames.slice(-4, -2));
//to search the elements in array
//fist index-of(),lastindexof(),indexof(),includes,find() search techniques
console.log(pnames.indexOf("realme"));
console.log(pnames.lastIndexOf("realme"));
//sorting techniques-sort
console.log(pnames.sort());
console.log(pnames.reverse());
//array advanced methods(es6plus)
//REDUCE METHOD
let sum = price.reduce((total, value) => {
  return total + value;
});
console.log(sum);
//map
let offerprice = price.map((val) => {
  return val - 5000;
});
console.log(offerprice);
//toconcat
let pnames1 = ["Oneplus", "Redme"];
console.log(pnames.concat(pnames1));
//spread operator
let brands = [...pnames, ...pnames1];
console.log(brands);
