var logOutBtn = document.getElementById("logOut");

var userName = localStorage.getItem("userNameStorage");
document.getElementById("textAndName").innerHTML = "Welcome" + " " + userName;

// events -->>>

logOutBtn.addEventListener("click", function () {
  toLogOut();
});

// functions --->>>

function toLogOut() {
  localStorage.removeItem("userNameStorage");
  window.location = "./index.html";
}
