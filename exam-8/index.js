let students = JSON.parse(localStorage.getItem('students')) || [];

let uimaker = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    students.forEach((student) => {
        let tr = document.createElement("tr");

        let tdName = document.createElement("td");
        tdName.innerHTML = student.name;

        let tdAge = document.createElement("td");
        tdAge.innerHTML = student.age;

        let tdCourse = document.createElement("td");
        tdCourse.innerHTML = student.course;

        tr.append(tdName, tdAge, tdCourse);
        tbody.append(tr);
    });
};

const handledata = (event) => {
    event.preventDefault();

    let student = {
        name: document.getElementById("Name").value.trim(),
        age: document.getElementById("Age").value.trim(),
        course: document.getElementById("Course").value.trim(),
    };

    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
    uimaker();
};

window.onload = () => {
    uimaker();
};

document.getElementById("StudentData").addEventListener("submit", handledata);
