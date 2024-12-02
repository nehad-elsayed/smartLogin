var btnLogin = document.getElementById("btnLogin");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passInput");
var incorrectAlert = document.getElementById("incorrectAlert");
var signUpArray = [];

if (localStorage.getItem("usersContainer") !== null) {
  signUpArray = JSON.parse(localStorage.getItem("usersContainer"));
}

console.log(signUpArray);

// events --->>>>
btnLogin.addEventListener("click", function () {
  login();
});

// funtctions  --->>>

function isInputsEmpty() {
  if ((emailInput.value == '' || passwordInput.value == '')) {
    return true;
  } else {
    return false;
  }
}

//


function login() {
  if (isInputsEmpty() == true) {
    incorrectAlert.innerHTML =
      '<span class="text-danger bg-danger-subtle">All inputs is required</span>';
    return;
  } else {
    var password = passwordInput.value;
    var email = emailInput.value;

    for (var i = 0; i < signUpArray.length; i++) {
      if (
        signUpArray[i].email.toLowerCase() == email.toLowerCase() &&
        signUpArray[i].password.toLowerCase() == password.toLowerCase()
      ) {
        localStorage.setItem("userNameStorage", signUpArray[i].name);
        window.location = "./home.html"; 

      }
    }
  }
}
