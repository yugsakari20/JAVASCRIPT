
import Navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = Navbar()



let students = JSON.parse(localStorage.getItem("students")) || [];
const tstudent = document.getElementById("tstudent");

const displayStudents = (filteredStudents) => {
    tstudent.innerHTML = ''; 
    filteredStudents.forEach((student) => {
        let tr = document.createElement('tr');

        let firstName = document.createElement('td');
        firstName.textContent = student.firstName;

        let lastName = document.createElement('td');
        lastName.textContent = student.lastName;

        let fatherName = document.createElement('td');
        fatherName.textContent = student.fatherName;

        let dob = document.createElement('td');
        dob.textContent = student.dob;
       
        let tel = document.createElement('td');
        tel.textContent = student.tel;
        
        let highSchool = document.createElement('td');
        highSchool.textContent = student.highSchool;

        let level = document.createElement('td');
        level.textContent = student.level;

        let email = document.createElement('td');
        email.textContent = student.email;
        
        tr.append(firstName,  lastName, fatherName,  dob, tel, highSchool,  level,  email)

        tstudent.appendChild(tr);
    });
};

displayStudents(students);

const handleCategory = (level) => {
    let filteredStudents = students.filter(student => student.level === level);
    displayStudents(filteredStudents); 
};

document.getElementById("1st Year")
.addEventListener("click", () => handleCategory("1st Year"));
document.getElementById("filter2")
.addEventListener("click", () => handleCategory("2nd Year"));
document.getElementById("filter3")
.addEventListener("click", () => handleCategory("3rd Year"));
document.getElementById("filter4")
.addEventListener("click", () => handleCategory("4th Year"));

