// let a = 10;
// let b = 20;
// let c = 30;

// let one = a * a;
// let two = b * b;
// let three = c * c;


// let squre = one + two + three;


// console.log(squre);


// let array = [1,2,3,4,5,6,7,8,9,10]
// let n  =  array.length;
// let sum = 0;


// for(let i = 0; i < n; i++){
//     sum += array[i]
// }
// if (sum %2 === 0) {
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

let array = [1,2,3,4,5,6,7,8,9,10]
let n = array.length;
let sum = 0;


for(let i = 0; i < n; i++){
    if (array[i] % 2 == 0 ) {
        sum += array[i]
    }
}
console.log(sum);
