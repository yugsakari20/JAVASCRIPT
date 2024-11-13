let second = 655;
let minute = 48;
let hour = 3;

let extrmin = Math.floor(second / 60);
let extrhour = Math.floor(minute / 60);

if (extrmin > 0) {
  minute += extrmin;
  second = second % 60;
}
if (extrhour > 0) {
  hour += extrhour;
  minute = minute % 60;
}
console.log(second,minute,hour);






























// const reverseTime = (hour,minute,second)=>{ 
//     const interval = setInterval(()=>{8

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
// reverseTime()

