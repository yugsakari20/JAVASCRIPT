import { Logout } from "../navbar/halper.js";
import { Navbar } from "../navbar/navbar.js";

document.getElementById("Navbar").innerHTML = Navbar()

const isLogin = localStorage.getItem("isLogin") || false;

if (!isLogin) {
    alert("plese login first")
    window.location.href = "page/login.html"
}


Logout()