import apimethod from "../API/api.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const handedata = async (e) => {
    e.preventDefault();

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        cart: [],
    };

    await apimethod.post(user);
    alert("Signup successful!");
};

const getData = async () => {
    const userarray = await apimethod.get();
    console.log(userarray);
};

document.getElementById("signup").addEventListener("submit", handedata);
getData();
