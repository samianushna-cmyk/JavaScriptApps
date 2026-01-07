//strings in javascript
//ways to create a string
let stings = "hello"; //primitive
console.log(stings);
//backtricks method
let name = "Anushna";
let str = `Hello ${name}`;
//console.log("hello '${name}' ");
console.log(str);
//object method
let str1 = new String("Anushna");
console.log(str1);
//to convert the datatypes to string
//number to string
let x = 2000;
console.log(String(x));
//boolean to string
let bool = true;
console.log(bool.toString());
//concatenating
let nam = "Anushna";
let initial = "S";
console.log(nam + " " + initial);
//concat
let product = "redme";
let cost = 5000;
console.log(product.concat(" ", cost));
//string methods
//length
let mother = "Nagalakshmi";
console.log(mother.length);
console.log(mother.toUpperCase()); //converts capital letters
console.log(mother.toLowerCase()); //lower case
//substring,slice
let dad = "Venkateswararao";
console.log(dad.substring(0, 5));
console.log(dad.slice(-3, 0));
console.log(dad.indexOf("n"));
//advanced methods of es6
//includes
let h = "helloeveryone";
console.log(h.includes("hello"));
//starts with,ends with,repeat
let v = "vignan lara ";
let y = v.startsWith("vignan");
console.log(y);
let z = v.endsWith("lara");
console.log(z);
let a = v.repeat(3);
console.log(a);
//replace all
console.log("10-20-30".replaceAll("-", ":"));
//sorting techniqes

