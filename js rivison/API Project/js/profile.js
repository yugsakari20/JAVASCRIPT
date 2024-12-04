import navbar from "../components/navbar.js";
import { apimethod } from "../API/api.js";

document.getElementById("navbar").innerHTML = navbar();

const loadProfile = async () => {
    const isLogin = localStorage.getItem("isLogin");
    const userId = JSON.parse(localStorage.getItem("userId"));

    if (!isLogin || !userId) {
        alert("You are not logged in!");
        window.location.href = "/pages/login.html";
        return;
    }
        const users = await apimethod.get();
        const user = users.find((u) => u.id === userId);

        if (!user) {
            alert("User not found!");
            window.location.href = "/pages/login.html";
            return;
        }

        document.getElementById("profilename").innerHTML = user.name ;
        document.getElementById("profileemail").innerHTML = user.email ;
        document.getElementById("profilepassword").innerHTML = user.password ;
    } 
       
loadProfile();
