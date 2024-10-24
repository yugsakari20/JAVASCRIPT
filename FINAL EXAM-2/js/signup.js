import Navbar from "../componetes/navbar.js";

document.getElementById("navbar").innerHTML = Navbar()

const handle = (e) => {
    e.preventDefault();

    let Data = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        profile: document.getElementById("profile").value,
        password: document.getElementById("password").value,
    }

console.log(Data);

localStorage.setItem("Dataa", JSON.stringify(Data));
 

}
document.getElementById("userData").addEventListener("submit", handle);