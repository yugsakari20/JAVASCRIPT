
import Navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let users = JSON.parse(localStorage.getItem("users")) || [];
const getValue = (selector) => document.querySelector(selector).value;

const handleData = (e) => {
  e.preventDefault();

  let user = {
    email: getValue(".email"),
    password: getValue(".password"),
  };

  let isMatched = users.filter(
    (ele) => ele.email === user.email && ele.password === user.password
  );

  if (isMatched.length > 0) {
    alert("Login success");

    localStorage.setItem("username", isMatched[0].username);
    localStorage.setItem("isLogin", true);
    window.location.href = "/index.html";
  } else {
    alert("Login failure");
  }
};

document.querySelector("#userData").addEventListener("submit", handleData);
