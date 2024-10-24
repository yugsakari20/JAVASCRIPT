document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mob = document.getElementById("mob").value;

    const formData = {
        email: email,
        password: password,
        mob: mob
    };
    console.log(formData);

});
