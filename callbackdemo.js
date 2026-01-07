console.log("hi");
let prices = [20000, 30000, 40000, 50000];
const newprices = prices.filter((val) => {//filter method is an advance method without using loops
  return val > 20000;
});
console.log(newprices);
console.log("hello");
//statements are executed in a sequential is sychnronous

