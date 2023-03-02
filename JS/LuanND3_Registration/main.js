var btn = document.querySelector(".btn");
var lu = "",
  lp = "",
  lc = "";

// console.log(pass);
// console.log(confirm);
btn.addEventListener("click", function () {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  var confirm = document.getElementById("confirm").value;
  if (user.length === 0) {
    lu = "Username is required";
  } else lu = ""
  document.getElementById("lu").innerHTML = lu;
  if (pass.length === 0) {
    lp = "Password is required";
  } else lp = ""
  document.getElementById("lp").innerHTML = lp;
  if (confirm.length === 0) {
    lc = "Confirm password is required";
  } else if (pass != confirm) {
    lc = "Password and confim password do not match"
  } else lc = ""
  document.getElementById("lc").innerHTML = lc;
  
});
