// select last element of the as partition and put it at correct position
const quickSort = arr => {
    quickSortUtil(arr, 0, arr.length - 1);
    return arr;
};

const quickSortUtil = (arr, low, high) => {
    if(low < high) {
        const pi = partition(arr, low, high);
        // since pi is at correct position for the last element in each recursive call
        // therefore not including the last element for the call
        quickSortUtil(arr, low, pi - 1);
        quickSortUtil(arr, pi + 1, high);    
    }
};

const partition = (arr, low, high) => {
    console.log('before partition happened', arr);
    const pi = arr[high];
    console.log('current pivot is: ', pi);
    let i = low - 1;
    for (let j = low; j <= high; j++) {
        if(arr[j] < pi) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    console.log('after partition happened', arr);
    return i + 1;
}

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const array = [12, 11, 13, 5, 6];
console.log(quickSort(array));
