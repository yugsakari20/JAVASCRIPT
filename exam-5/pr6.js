let arr = [3, 2, 2, 1, 1, 3, 4, 5, 6];
let n = arr.length

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < n; j++) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
      j--;
    }
  }
}
console.log(arr);