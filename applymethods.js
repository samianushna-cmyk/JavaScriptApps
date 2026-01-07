//Apply methods
const stdInfo = {
  //sRollno: 1,
  //sName: "Anushna",
  //qualification:"B.tech",
  //marks:1000,
  sdetails: function (qualification, marks) {
    return (
      this.sRollno +
      " " +
      this.sName +
      " " +
      this.qualification +
      " " +
      this.marks
    );
  },
};
const student = {
  sRollno: 1001,
  sName: "Anushna",
};
console.log(stdInfo.sdetails.apply(student, ["B.Tech", 1000]));
