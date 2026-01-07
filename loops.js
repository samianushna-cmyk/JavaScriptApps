//loops
//loops in javascript
//for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//while loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
//dowhile loop
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 10);
//new lopps in es6
//for-in and for-of
//to retrive the large amount of data we use theese loops
//theese loops are used to retrive the data from iterables(array,string,object etc)
//forof is used to take the values from arrays
const pnames = ["lg", "samsung", "vivo", "realme"];
for (let name of pnames) {
  console.log(name);
}
const pname = ["lg", "samsung", "vivo", "realme"];
for (let names in pname) {
  console.log(pname[names]);
}
let empinfo = { empid: 1001, ename: "anushna", empsalary: 100000 };
for (let emp in empinfo) {
  console.log(empinfo[emp]);
}
//retrive from string
let colledgename = "vignan";
for (let index in colledgename) {
  console.log(colledgename[index]);
}
let colledge = "klu";
for (let h of colledge) {
  console.log(h);
}
