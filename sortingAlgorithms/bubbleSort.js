// puts the greatest elements in their positions
const bubbleSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            // if we change > to < --> sort from ascending to descending
            if(arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

const array = [4,2,1,6,7,10];
console.log(bubbleSort(array));