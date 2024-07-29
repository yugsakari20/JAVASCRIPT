let arr = [20,4,5,78,6,2]
let lar = arr[0];
let n = arr.length

for(let i = 1; i < n; i++){
    if(arr[i] > lar)
        lar = arr[i]
}
console.log(lar);