let arr = [1, 2, 2, 3, 2, 4, 5];
let n = arr.length;
let count = 0;
let target = 2;
for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  console.log(target);
  return count;

