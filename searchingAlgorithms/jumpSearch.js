const jumpSearch = (arr, ele) => {
    if (arr.length === 0) {
        return -1;
    }
    // for optimal steps
    let step = Math.floor(Math.sqrt(arr.length)), i = 0;
    while(i < arr.length) {
        let prev = i;
        if(arr[i] === ele) {
            return i;
        }
        i += step;
        if(arr[i] > ele) {
            while(prev < i) {
                if(arr[prev] === ele) {
                    return prev
                }
                prev++;
            }
            return -1;
        }
    }
    return -1;
}

const arr = [1,2,3,5,6,7];
console.log(jumpSearch(arr, 4));