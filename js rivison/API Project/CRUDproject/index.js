import { userapi, deleteuser, updateuser } from "./api.js";


const userarray = await userapi.get();

const createUser = async (e) => {
    e.preventDefault();

    const submitButton = document.getElementById("submit");

    const user = {
        name: document.getElementById("name").value.trim(),
        mobno: document.getElementById("mobno").value.trim(),
        email: document.getElementById("email").value.trim(),
    };


    if (submitButton.value.toLowerCase() === "update") {
        await userapi.put(user);
        submitButton.value = "Add User";
    } else {

        await userapi.post(user);
    }

    displayData(await userapi.get());
};

const displayData = (data) => {
    const displayDiv = document.getElementById("display");
    displayDiv.innerHTML = "";

    data.forEach((user) => {
        const div = document.createElement("div");

        const name = document.createElement("p");
        const mobno = document.createElement("p");
        const email = document.createElement("p");
        const remove = document.createElement("button");
        const update = document.createElement("button");

        name.innerHTML = `Name: ${user.name}`;
        mobno.innerHTML = `Mobile: ${user.mobno}`;
        email.innerHTML = `Email: ${user.email}`;
        remove.innerHTML = "Delete";
        update.innerHTML = "Update";

        remove.addEventListener("click", async () => {
            await deleteuser(user.id);
            displayData(await userapi.get());
        });

        update.addEventListener("click", () => {
            document.getElementById("name").value = user.name;
            document.getElementById("mobno").value = user.mobno;
            document.getElementById("email").value = user.email;
            document.getElementById("submit").value = "Update";
        });

        div.append(name, mobno, email, remove, update);
        displayDiv.append(div);
    });
};

// Initialize
document.getElementById("form").addEventListener("submit", createUser);
displayData(userarray);
