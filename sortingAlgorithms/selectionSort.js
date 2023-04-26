// puts smallest position elements to their respective position
const selectionSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[min] > arr[j] ) {
                min = j;
            }
        }
        if (min !== i) {
            const temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }
    }
    return arr;
};

const array = [4,2,1,6,7,10];
console.log(selectionSort(array));