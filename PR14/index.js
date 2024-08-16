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

    if (hours < 10) {
        hour.innerHTML = `0${hours}`;
    } else {
        hour.innerHTML = hours;
    }

    if (minutes < 10) {
        minute.innerHTML = `0${minutes}`;
    } else {
        minute.innerHTML = minutes;
    }

    if (sec < 10) {
        second.innerHTML = `0${sec}`;
    } else {
        second.innerHTML = sec;
    }
    
}, 1000);
