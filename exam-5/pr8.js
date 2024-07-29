let arr = [1, 2, 3, 4, 5];
let positions = 2;
let n = arr.length
let start = arr.slice(-positions % n);
let end = arr.slice(0, arr.length - (positions % n));
let rotateArray = start.concat(end);
console.log(rotateArray);