//events in js
//event logic
function Sample() {
  alert("hi");
}
let btnvalue = document.getElementById("demo");
//to connect
btnvalue.addEventListener("click", Sample);
function Sample2() {
  alert("hello");
}
let btn = document.getElementById("info");
btn.addEventListener("click", Sample2);
let headervalue = document.getElementById("demo2");
const MouseOver = () => {
  headervalue.style.color = "blue";
};
let MouseOut = () => {
  headervalue.style.color = " red";
};
headervalue.addEventListener("mouseover", MouseOver);
headervalue.addEventListener("mouseout", MouseOut);
let inputvalue = document.getElementById("in");
let pvalue = document.getElementById("p1");
const InputLogic = () => {
  let uservalue = inputvalue.value;
  pvalue.textContent = uservalue;
};
inputvalue.addEventListener("input", InputLogic);
