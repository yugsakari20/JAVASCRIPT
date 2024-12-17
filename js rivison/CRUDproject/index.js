import { userapi, deleteuser, updateuser } from "./api.js";

let updateId = null; 

const userarray = await userapi.get();
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
            updateId = user.id; 
        });

        div.append(name, mobno, email, remove, update);
        displayDiv.append(div);
    });
};

const createUser = async (e) => {
    e.preventDefault();

    const user = {
        name: document.getElementById("name").value,
        mobno: document.getElementById("mobno").value,
        email: document.getElementById("email").value,
    };

    if (updateId) {
        await updateuser(user, updateId);
        document.getElementById("submit").value = "Add User";
        updateId = null;
    } else {
        await userapi.post(user);
    }

    document.getElementById("form").reset(); 
    displayData(await userapi.get()); 
};


document.getElementById("form").addEventListener("submit", createUser);
displayData(userarray); 
