//validation logic
function Validate() {
  //request data gathering logic
  let user = document.getElementById("username").value;
  let password = document.getElementById("pass").value;
  let regex = /[a-z][A-Z][0-9]/;
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

  return true;
}
