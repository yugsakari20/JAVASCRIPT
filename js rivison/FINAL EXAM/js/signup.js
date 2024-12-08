import { userApi } from "../API/userapi.js";
import navbar from "../componets/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let userarray = await userApi.get();

const hendlData = async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const user = {
    email,
    password: document.getElementById("password").value,
    name: document.getElementById("name").value,
    role: document.getElementById("role").value || "user",
    cart: [],
  };


  const userExists = userarray.find((u) => u.email === user.email);
  if (userExists) {
    alert("Email is already registered");
    return;
  }

  await userApi.post(user);
  alert("Signup successful");

  
  userarray = await userApi.get();
};

document.getElementById("signupForm").addEventListener("submit", hendlData);
console.log(userarray);
