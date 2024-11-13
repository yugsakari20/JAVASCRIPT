let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let day = document.getElementById("day")

let month = ["jan","feb","march","april","may","june","julay","ogu","saptember","oct","nov","dec"]

let clock = setInterval(function time() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let sec = today.getSeconds();
    let month = today.getMonth();


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



// const reverseTime = (hour,minute,second)=>{
//     const interval = setInterval(()=>{

//         console.log(`${hour} : ${minute} : ${second}`)

//         if(hour==0 && minute==0 && second==0){
//             return clearInterval(interval);
//         }

//         if(minute==0 && hour>0){
//             hour--;
//             minute=59
//             second = 59
//         }

//         if(second==0){
//             minute--;
//             second=59
//         }

//         second--;
//     },1000)
// }

// reverseTime();