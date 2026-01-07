//Objects in js
const movieinfo = {
  movietitle: "Akhanda2",
  hero: "Balakrishna",
  director: "Boyapati",
}; //object creation in js
console.log(movieinfo);
//to get director
console.log(movieinfo.director);
console.log(movieinfo["hero"]);
//for in loop//to retrive properties
for (let name in movieinfo) {
  console.log(movieinfo[name]);
}
//Advanced methods
//Object.keys
Object.keys(movieinfo).forEach((key) => {
  console.log(key);
});
//Object.values
Object.values(movieinfo).forEach((values) => {
  console.log(values);
});
//Object.Entries
Object.entries(movieinfo).forEach((entry) => {
  console.log(entry[0] + " " + entry[1]);
});
//to get both values and key
for (let [now, info] of Object.entries(movieinfo)) {
  console.log(now + "" + info);
}
//for (let [ne, inf] in movieinfo) {
//console.log(ne, inf);
//}
//nested object
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models);
//cart object
const cart = {
  product: [
    { pid: 1001, pnme: "drone", price: 40000 },
    { pid: 2001, pname: "Ac", price: 45000 },
  ],
  shipping: [{ areaname: "tenali", pincode: 52201, sname: "ren" }],
  userinfo: [{ userid: 23, username: "anushna" }],
};
console.log(cart.userinfo[0].username);
