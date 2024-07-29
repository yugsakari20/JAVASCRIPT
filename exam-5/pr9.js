let arr = [1, 2, 3, 4, 5];
let Sort = true;
let n = arr.length
for (let i = 0; i < n - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    Sort = false;
  
  }
}
console.log(Sort);