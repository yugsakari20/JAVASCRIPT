import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();


let students = JSON.parse(localStorage.getItem("students")) || [];


const getValue = (selector) => {
    return document.querySelector(selector).value;
};


const handleSubmit = (e) => {
    e.preventDefault();

    
    let student = {
        firstName: getValue("#firstName"),
        lastName: getValue("#lastName"),
        fatherName: getValue("#fatherName"),
        dob: getValue("#dob"),
        tel: getValue("#tel"),
        highSchool: getValue("#highSchool"),
        level: getValue("#level"),
        email: getValue("#email")
    };


    students.push(student);

   
    localStorage.setItem("students", JSON.stringify(students));


    document.getElementById("registrationForm").reset();
};

document.getElementById("registrationForm").addEventListener("submit", handleSubmit);
