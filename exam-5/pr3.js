let arr = [20, 4, 5, 70, 6, 2];
let small = arr[0];
let n = arr.length;

for(let i = 1; i < n; i++) {
    if(arr[i] < small)
        small = arr[i];
}
console.log(small);
