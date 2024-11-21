import apimethod from "../API/api.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


const handleLogin = async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = await apimethod.get();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert("Login successful!");
    
    } else {
        alert("Invalid email or password. Please try again.");
    }
};


document.getElementById("login").addEventListener("submit", handleLogin);
