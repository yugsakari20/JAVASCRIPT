import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();

const users = JSON.parse(localStorage.getItem("users")) || [];

const getValue = (selector) => document.querySelector(selector).value;

const handleData = (e) => {
  e.preventDefault();

  const email = getValue(".email");
  const password = getValue(".password");

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    alert("Login success");
    localStorage.setItem("username", user.username);
    localStorage.setItem("isLogin", true);
    window.location.href = "/project/index.html";
  } else {
    alert("Login failure");
  }
};

document.querySelector("#userData").addEventListener("submit", handleData);
