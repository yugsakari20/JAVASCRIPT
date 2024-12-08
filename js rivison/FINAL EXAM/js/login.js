import { userApi } from "../API/userapi.js";
import navbar from "../componets/navbar.js";


document.getElementById("navbar").innerHTML = navbar();


const handLogin = async(e) => {
    e.preventDefault();

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    

    const users = await userApi.get()
    const user = users.find((u) => u.email === email)

    if (!user) {
        alert("Dose`t exit email")
        return ;
    }

    if (user.password !== password) {
        alert("wrong password")
        console.log(password);
        
        return;
    }
    alert("Login suc")

    localStorage.setItem("isLogin", true)
    localStorage.setItem("userId", JSON.stringify(user.id));                
    localStorage.setItem("role", user.role); 

}

document.getElementById("loginform").addEventListener("submit", handLogin)