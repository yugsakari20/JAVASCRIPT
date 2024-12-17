import { userApi } from "../API/user.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const hendlLogin = async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = await userApi.get();
  const user = users.find((u) => u.email === email);

  if (!user) {
    alert("email dose t exit");
    return;
  }

  if (user.password !== password) {
    alert("Wrong password");
    return;
  }

  alert("Login successfull");

  localStorage.setItem("isLogin", true);
  localStorage.setItem("userId", JSON.stringify(user.id));
  window.location.href = "/index.html";
};

document.getElementById("login").addEventListener("submit", hendlLogin);
