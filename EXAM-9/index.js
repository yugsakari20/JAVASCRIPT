let user = JSON.parse(localStorage.getItem("user")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];

const handleData = (user) => {
    const sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = "";

    user.forEach((data) => {
        let div = document.createElement("div");
        div.className = "user-profile";
        let img = document.createElement("img");
        img.src = data.img;
        img.className = "user-img";
        let username = document.createElement("h2");
        username.className = "user-name";
        username.innerHTML = data.username;
        div.append(img, username);
        sidebar.append(div);
    });
};

const handleUsers = (users) => {
    const main = document.getElementById("main");
    main.innerHTML = "";

    users.forEach((newsdata, index) => {
        let div = document.createElement("div");
        div.className = "news-box";

        let image = document.createElement("img");
        image.src = newsdata.image;
        image.className = "news-image";

        let content = document.createElement("div");
        content.className = "news-content";

        let title = document.createElement("h2");
        title.innerHTML = newsdata.title;

        let p = document.createElement("p");
        p.innerHTML = newsdata.description;

        let deletebtn = document.createElement("button");
        deletebtn.innerHTML = "Delete";
        deletebtn.className = "delete-btn";
        deletebtn.addEventListener("click", () => {
            users.splice(index, 1);
            localStorage.setItem("users", JSON.stringify(users));
            handleUsers(users);
        });

        content.append(title, p, deletebtn);
        div.append(image, content);
        main.append(div);
    });
};

window.addEventListener("DOMContentLoaded", () => {
    handleData(user);
    handleUsers(users);
});
