const linearSearch = (arr, ele) => {
    if(arr.length === 0) return -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === ele) return i;
    }
    return -1;
}
const arr = [1,5,3,423,645,3245,64,53,251,36,8];

console.log(linearSearch(arr, 8));