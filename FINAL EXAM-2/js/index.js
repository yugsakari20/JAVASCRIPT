import Navbar from "../componetes/navbar.js";

document.getElementById("navbar").innerHTML = Navbar()

let add = JSON.parse(localStorage.getItem('Dataa'));
console.log(add);
const ui = () => {

    let profile = document.createElement("img");
    profile.src = add.url_profile;
    profile.classList.add('profile-pic');
    
    let username = document.createElement("p");
    username.innerHTML = add.username;
    username.classList.add('user-info');
   
    let email = document.createElement("p");
    email.innerHTML = add.email;
    email.classList.add('user-info');



    document.getElementById("userData").append( profile, username, email);


}
ui();

