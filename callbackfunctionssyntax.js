//callbackfunctions syntax types
//callback functions as an anonymys
//anonoyms-namelessfunctions
let prices = [20000, 30000, 40000, 50000];
const newprices = prices.map((val) => {
  return val - 2000;
});
console.log(newprices);
//callback function with name
function sample() {
  console.log("hi");
}
function demo(callback) {
  return callback;
}
demo(sample());
