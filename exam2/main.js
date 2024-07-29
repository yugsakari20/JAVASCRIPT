let employes = [];

let uimaker = () => {
    document.getElementById('tbody').innerHTML = "";
    for (let i = 0; i < employes.length; i++) {
        let tr = document.createElement('tr');
        let td0 = document.createElement("td");
        td0.innerHTML = i + 1;
        let td1 = document.createElement('td');
        td1.innerHTML = employes[i].username;
        let td2 = document.createElement('td');
        td2.innerHTML = employes[i].email;
        let td3 = document.createElement('td');
        td3.innerHTML = employes[i].jobtitle;
        let td4 = document.createElement('td');
        td4.innerHTML = employes[i].salary;
        tr.append(td0, td1, td2, td3, td4);
        document.getElementById('tbody').append(tr);
    }
}

const handledata = (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let jobtitle = document.getElementById('jobtitle').value;
    let salary = document.getElementById('salary').value;
    let employe = {
        username: username,
        email: email,
        jobtitle: jobtitle,
        salary: salary
    }
    employes.push(employe);
    uimaker();
}

document.getElementById("userData").addEventListener("submit", handledata);