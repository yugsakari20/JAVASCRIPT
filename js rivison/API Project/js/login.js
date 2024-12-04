import {apimethod} from "../API/api.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const handleLogin = async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = await apimethod.get();
    const user = users.find((u) => u.email === email);

    if (!user) {
        alert("Email doesn't exist!");
        return;
    }

    if (user.password !== password) {
        alert("Wrong password");
        return;
    }

    alert("Login successful!");

    localStorage.setItem("isLogin", true);
    localStorage.setItem("userId", JSON.stringify(user.id));
    window.location.href = "/index.html"; 
};

document.getElementById("login").addEventListener("submit", handleLogin);
