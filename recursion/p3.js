/* 
1. check if the array if sorted or not
2. sum of array
3. linear search
4. binary search
*/
const main = () => {
    const arr = [1, 3, 4, 6, 8, 9, 10, 12, 15, 20, 25, 30, 35];
    const key = 9;
    console.log(prob1(arr));
    console.log(prob2(arr));
    console.log(prob3(arr, key));
    console.log(prob4(arr, key));
};

const prob1 = arr => {
    // base case
    // if length of arr === 0 or 1 it is already sorted;
    if(arr.length <= 1) return true;
    // if element at 0th position is greater than the next one it is not sorted
    if(arr[0] > arr[1]) return false;
    // if first pair is sorted then checking for next pair that is
    // if 0 and 1 are sort then for the next call check for 1 and 2 
    return prob1(arr.slice(1, arr.length));

};

const prob2 = arr => {
    // base condition if length of array becomes 0 then its sum is 0
    if (arr.length === 0) return 0;
    //  adding first element and adding others recursively
    return arr[0] + prob2(arr.slice(1, arr.length));
};

const prob3 = (arr, key) => {
    if (arr.length === 0) return false;
    if (arr[0] === key) return true;
    return prob3(arr.slice(1, arr.length), key);
};

const prob4 = (arr, key) => {
    console.log(arr, key);
    // base case --> if element not found
    if(arr.length === 1 && arr[0] !== key) return false;
    // finding mid for comparision
    const mid = parseInt((0 + arr.length) / 2);
    // if found return true
    if(arr[mid] === key) return true;
    // if key > mid element --> search in the right half
    if(key > arr[mid]) return prob4(arr.slice(mid, arr.length), key);
    // if key < mid element --> search in the left half
    return prob4(arr.slice(0, mid), key);
}

main();