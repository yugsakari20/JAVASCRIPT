import apimethod from "../API/api.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


const handleLogin = async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = await apimethod.get();
    const user = users.filter((e) => e.email === email)

    if(user.length == 0){
        alert("Email doesn`t exist!")
        return
    }
    if (user[0].password !== password) {
        alert("wrong password")
        return
    }
    alert("login sus")

    localStorage.setItem("isLogin",true)
};

document.getElementById("login").addEventListener("submit", handleLogin);