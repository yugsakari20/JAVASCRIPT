import apimethod from "../API/api.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let userarray = [];
console.log(userarray);


const handedata = (e) => {
    e.preventDefault();

    const user = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
    userarray.push(user)
    apimethod.post(userarray)
}

const getData = async () => {
    userarray = await apimethod.get()
}


document.getElementById("signup").addEventListener("submit",handedata)
getData()