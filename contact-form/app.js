let sendButton = document.getElementById("send");
let resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function () {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  name.value = "";
  email.value = "";
  message.value = "";
  localStorage.clear();
});

sendButton.addEventListener("click", function (e) {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);
});
