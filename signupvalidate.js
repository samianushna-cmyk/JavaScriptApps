//validation logic
function Validate() {
  //request data gathering logic
  let user = document.getElementById("username").value;
  let password = document.getElementById("pass").value;
  let regex = /[a-z][A-Z]/;
  let confirmpassword = document.getElementById("confs").value;
  let mobile_no = document.getElementById("mobile").value;
  let mbregex = /[0-9]{10}/;
  let mail = document.getElementById("email").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let day = document.getElementById("dob").value;
  let adress = document.getElementById("adress").value;
  let select = document.getElementById("select").value;
  let shifts = document.querySelectorAll('input[name="shift"]:checked');
  let fileInput = document.getElementById("file");
  let file = fileInput.files[0];

  //validation logic
  if (user == "") {
    alert("please enter user name");
    return false;
  }

  if (password == "") {
    alert("please enter password");
    return false;
  }
  if (password.length < 8 || password.length > 12) {
    alert("password should be minimum eight characters and tweleve characters");
    return false;
  }
  if (!regex.test(password)) {
    alert(
      "password should be combination of small letters ,capitalletters and numbers"
    );
    return false;
  }
  if (confirmpassword != password) {
    alert("password is not matched");
    return false;
  }
  if (mobile_no == "") {
    alert("please enter mobile number");
    return false;
  }
  if (mobile_no.length < 10) {
    alert("please enter the correct mobilenumber");
    return false;
  }
  if (!mbregex.test(mobile_no)) {
    alert("the mobile numbet should be greatet than 10 digits");
    return false;
  }

  if (mail == "") {
    alert("please enter valid email");
    return false;
  }
  if (!mail.includes(".")) {
    alert("please include the .method");
    return false;
  }
  if (gender == null) {
    alert("please select the gender");
    return false;
  }
  if (day == "") {
    alert("please selct your date of birth");
    return false;
  }
  if (adress == "") {
    alert("please enter the adress");
    return false;
  }
  if (select == "") {
    alert("please select an option");
    return false;
  }
  if (shifts.length == 0) {
    alert("please select the options ");
    return false;
  }
  if (!file) {
    alert("please upload the file ");
    return false;
  }

  return true;
}
