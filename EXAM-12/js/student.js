
import Navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = Navbar()



let students = JSON.parse(localStorage.getItem("students")) || [];
const tstudent = document.getElementById("tstudent");

const displayStudents = (filteredStudents) => {
    tstudent.innerHTML = ''; 
    filteredStudents.forEach((student) => {
        let row = document.createElement('tr');

        let firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        let lastNameCell = document.createElement('td');
        lastNameCell.textContent = student.lastName;
        row.appendChild(lastNameCell);

        let fatherNameCell = document.createElement('td');
        fatherNameCell.textContent = student.fatherName;
        row.appendChild(fatherNameCell);

        let dobCell = document.createElement('td');
        dobCell.textContent = student.dob;
        row.appendChild(dobCell);

        let telCell = document.createElement('td');
        telCell.textContent = student.tel;
        row.appendChild(telCell);

        let highSchoolCell = document.createElement('td');
        highSchoolCell.textContent = student.highSchool;
        row.appendChild(highSchoolCell);

        let levelCell = document.createElement('td');
        levelCell.textContent = student.level;
        row.appendChild(levelCell);

        let emailCell = document.createElement('td');
        emailCell.textContent = student.email;
        row.appendChild(emailCell);

        tstudent.appendChild(row);
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


const search = (e) => {
    e.preventDefault();

    let searchValue = getValue("#search");
    let temp = students.filter((ele) => ele.title.toLowerCase().includes(searchValue.toLowerCase()));


};

document.getElementById("searching").addEventListener("submit", search);

