let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let day = document.getElementById('day');

let monthName = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
];

let clock = setInterval(function time() {
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let sec = today.getSeconds();

    day.innerHTML = `${date} ${monthName[month]} ${year}`;

    hour.textContent = hours < 10 ? `0${hours}` : hours;
    minute.textContent = minutes < 10 ? `0${minutes}` : minutes;
    second.textContent = sec < 10 ? `0${sec}` : sec;
}, 1000);
