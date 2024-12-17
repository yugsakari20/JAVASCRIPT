import { deleteStudent, studentApi, updateStudent } from "./api.js";

const userArray = await studentApi.get();

let updateId = null;

const displayData = (data) => {
  document.getElementById("display").innerHTML = "";
  data.map((e) => {
    const div = document.createElement("div");

    const name = document.createElement("p");
    const rollno = document.createElement("p");
    const email = document.createElement("p");
    const remove = document.createElement("button");
    const update = document.createElement("button");

    name.innerHTML = e.name;
    rollno.innerHTML = e.rollno;
    email.innerHTML = e.email;
    remove.innerHTML = "DELETE";
    update.innerHTML = "UPDATE";

    remove.addEventListener("click", async () => {
      await deleteStudent(e.id);
      const updatedUserArray = await studentApi.get();
      displayData(updatedUserArray);
    });

    update.addEventListener("click", () => {
      document.getElementById("name").value = e.name;    
      document.getElementById("rollno").value = e.rollno; 
      document.getElementById("email").value = e.email;   
      updateId = e.id; 
    });

    div.append(name, rollno, email, remove, update);
    document.getElementById("display").append(div);
  });
};

const student = async (e) => {
  e.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    rollno: document.getElementById("rollno").value,
    email: document.getElementById("email").value,
  };

  if (updateId) {
    await updateStudent(user, updateId);
    updateId = null;
  } else {
    await studentApi.post(user);
  }
  const updatedUserArray = await studentApi.get(); 
  displayData(updatedUserArray); 
};

document.getElementById("form").addEventListener("submit", student);
displayData(userArray);
