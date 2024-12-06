import { userApi } from "../API/userapi.js";
import navbar from "../componets/navbar.js";


document.getElementById("navbar").innerHTML = navbar();

const userarray = await userApi.get();
const hendlData = async (e) => {
    e.preventDefault();

    const user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        name: document.getElementById("name").value,
        role : document.getElementById("role").value,
        cart:[],
    };
  
    await  userApi.post(user)
    alert("signup successfull")
    
};

document.getElementById("signupForm").addEventListener("submit",hendlData)
console.log(userarray) 