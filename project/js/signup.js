import Navbar from "../components/navbar.js";
import getValue from "../components/helper.js";

document.getElementById("navbar").innerHTML = Navbar();

let users = JSON.parse(localStorage.getItem("users")) || [];

const handleData = (e) => {
  e.preventDefault();

  const username = getValue(".username");
  const email = getValue(".email");
  const password = getValue(".password");
  const confirmpassword = getValue(".confirmpassword");

  if (password !== confirmpassword) {
    alert("Passwords do not match!");
    return;
  }

  const newUser = { username, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = "/project/pages/login.html";
};

document.querySelector("#userData").addEventListener("submit", handleData);
