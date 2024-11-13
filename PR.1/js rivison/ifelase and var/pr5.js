// let a = 10;


// let cube = a * a * a;
// console.log(cube);


let array = [1, 2, 3, 4, 4, 4, 4, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

if (sum % 2 === 0) {
  console.log("The sum is even");
} else {
  console.log("The sum is odd");
}


