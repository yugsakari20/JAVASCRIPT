import { userApi } from "../api/api.js";
import { Navbar } from "../navbar/navbar.js";

document.getElementById("Navbar").innerHTML = Navbar()

let usser = await userApi.get()

const handlData = async (e) => {
    e.preventDefault()
let email = document.getElementById("email").value;

    let user = {
        name:document.getElementById("name").value,
        email,
        password: document.getElementById("password").value
    }
    const userExit = usser.find((u) => u.email === user.email)
    if (userExit) {
        alert("Email arladey exit")
        return;
    }

    await userApi.post(user)
    alert("sucsefuley")
}

console.log(usser);
document.getElementById("form").addEventListener("submit",handlData)