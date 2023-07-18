const passwordField = document.getElementById("passwordText");
const btn = document.getElementById("button");

btn.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    btn.innerText = "Hide Password";
  } else if (passwordField.type === "text") {
    passwordField.type = "password";
    btn.innerText = "Show Password";
  }
});
