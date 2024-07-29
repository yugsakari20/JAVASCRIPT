let users = [];

const handledata = (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let salary = document.getElementById("salary").value;
  let user = {
    username: username,
    number: number,
    email: email,
    salary: salary,
  };
  users.push(user);
  console.log(users);
  uimaker();
};

const uimaker = () => {
  document.getElementById("tbody").innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = users[i].username;
    let td2 = document.createElement("td");
    td2.innerHTML = users[i].number;
    let td3 = document.createElement("td");
    td3.innerHTML = users[i].email;
    let td4 = document.createElement("td");
    td4.innerHTML = users[i].salary;
    let td5 = document.createElement("td");
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.onclick = () => {
      users.splice(i, 1);
      uimaker();
    };
    td5.append(removeButton);
    tr.append(td1, td2, td3, td4, td5);
    document.getElementById("tbody").append(tr);
  }
};

const clearAllData = () => {
  users = [];
  uimaker();
};

document.getElementById("userdata").addEventListener("submit", handledata);
document.getElementById("removeAll").addEventListener("click", clearAllData);
