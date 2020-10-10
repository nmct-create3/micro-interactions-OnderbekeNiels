


function handleFloatingLabel() {}

function handlePasswordSwitcher() {
  const pwd = document.querySelector(".js-password");
  const checkbox = document.querySelector(".js-checkbox");
  const passwordOptions = ["password", "text"];

  checkbox.addEventListener("change", function () {
    pwd.type = passwordOptions[+this.checked];
    console.log("jow");
  });
}
document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded!");
  handleFloatingLabel();
  handlePasswordSwitcher();
});
