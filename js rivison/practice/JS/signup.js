import { userApi } from "../API/user.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const userarray = await userApi.get();
const hendlData = async (e) => {
    e.preventDefault();

    const user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        name: document.getElementById("name").value
    }
  
    await  userApi.post(user);
    alert("signup successfull")
    
};

document.getElementById("form").addEventListener("submit",hendlData)
console.log(userarray) 