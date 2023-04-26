const binarySearch = (arr, ele) => {
    let start = 0, end = arr.length - 1;
    while(start <= end) {
        const mid = parseInt(start + ((end - start) / 2));
        if(arr[mid] === ele) return mid;
        if(arr[mid] > ele) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

const arr = [1,2,3,4,5,6,7];
console.log(binarySearch(arr, 7));

// find first and last position of an element in a Sorted array
// also find total number of occurence of element

const arr1 = [0,5,5,6,6,6,6] // find 3
const arr2 = [0,1,1,2,2,2,2,3] // find 2
function findFirstAndLastPosition(arr, ele) {
    const position = binarySearch(arr, ele);
    if(position === -1) {
        console.log(-1, -1);
        console.log('total occurence: ' + 0)
    } else {
        let t = position;
        while(arr[t] === ele) {
            t++
        }
        console.log(position, t - 1)
        console.log('total Occurence: ' + (t - position).toString())
    }
}
findFirstAndLastPosition(arr1, 3)
findFirstAndLastPosition(arr2, 2)


// find peak index in mountain array
const arr3 = [0,1,1,2,3,4,5,4,3,3,3,2,2,1,1,0]

function findPeakElement(arr) {
    let s = 0, e = arr.length - 1
    while(s <= e) {
        let mid = parseInt(s + ((e-s)/2));
        if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
        if(arr[mid] < arr[mid + 1]) s = mid + 1
        else e = mid - 1
    }
    return -1
}
console.log(findPeakElement(arr3))

// find pivot in an array
// arr = [1,2,3,4,5,6] -- rotated --> result = [5,6,1,2,3,4]
// find the point from which the arr is rotated
// in above example it is 1

const arr4 = [4,5,6,1,2,3]
function findPivot(arr) {
    let s = 0, e = arr.length - 1;
    while(s <= e) {
        let mid = parseInt(s + ((e - s)/2))
        if(arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]) return mid;
        if(arr[mid] > arr[mid - 1]) s = mid
        else e = mid
    }
    return -1
}
console.log(findPivot(arr4))

// search in a rotated array
function searchInRotatedArray(arr, ele) {
    const pivot = findPivot(arr);
    if (arr[pivot] === ele) return pivot;
    if(arr[pivot] < ele && ele < arr[arr.length - 1]) {
        // search in right part
        return pivot + (binarySearch(arr.slice(pivot), ele))
    } else {
        // search in right part
        return (binarySearch(arr.slice(0, pivot), ele))
    }

}

console.log(searchInRotatedArray(arr4, 5))

// square root using binary search
function sqrt(n) {
    let s = 0, e = n;
    while(s <= e) {
        let mid = parseInt(s + ((e - s)/2))
        if (mid * mid === n) return mid
        if(mid * mid > n) e = mid - 1
        else s = mid + 1
    }
}
console.log(sqrt(36))