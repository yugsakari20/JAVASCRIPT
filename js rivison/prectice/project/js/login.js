import { userApi } from "../api/api.js";
import { Navbar } from "../navbar/navbar.js";

document.getElementById("Navbar").innerHTML = Navbar()



const handLogin = async(e) => {
    e.preventDefault()

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = await await userApi.get();
    const user = users.find((u) => u.email === email);

    if (!user) {
        alert("email dose`t exit")
        return;
    }

    if (user.password !== password) {
        alert("Wrong password")
        return;
    }
    alert("Login sucsefuley")

    localStorage.setItem("isLogin", true);

}

document.getElementById("Login").addEventListener("submit",handLogin)