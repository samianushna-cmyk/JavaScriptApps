//this keyword
const empInfo = {
  firstName: "Anushna",
  lastName: "Sami",
  FullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(empInfo.FullName());
