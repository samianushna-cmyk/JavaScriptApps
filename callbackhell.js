const student_details = () => {
  console.log("student info");
  setTimeout(() => {
    let rollno = [1, 2, 3, 4];
    console.log(rollno);
    setTimeout(
      (rollno) => {
        const data = {
          name: "anushna",
          qualification: "b.tech",
        };
        console.log(`name is ${data.name} 
            qualification is ${data.qualification}
            rollnumber is ${data.roll_no}`);
      },
      2000,
      rollno[1]
    );
  }, 2000);
};
student_details();
