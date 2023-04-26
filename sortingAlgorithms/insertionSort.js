// check for next element, if greater swap with previous till lower not found
const insertionSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i + 1]) {
            let j = i + 1;
            while (j > 0 && arr[j - 1] > arr[j]) {
                const t = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = t;
                j--;
            }
        }
        console.log(arr, i);
    }
    return arr;
};

const array = [12, 11, 13, 5, 6];
console.log(insertionSort(array));

// merge two sorted array
const a1 = [1,3,5,7,9], a2 = [2,4,6,8]
function mergeSortedArrays(arr1,arr2) {
    let i = 0, j = 0;
    const output = []
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            output.push(arr1[i]);
            i++
        } else {
            output.push(arr2[j]);
            j++
        }
    }
    if(i < arr1.length - 1) {
        while(i < arr1.length) {
            output.push(arr1[i]);
            i++
        }
    }
    if(j < arr2.length - 1) {
        while(j < arr2.length) {
            output.push(arr2[j]);
            j++
        }
    }
    return output
}

console.log(mergeSortedArrays(a1, a2))

// rotate array using reversal algorithm
function rotateArray(arr, k) {
    k %= arr.length
    function reverse(a, i, j) {
        while(i < j) {
            const temp = a[i];
            a[i] = a[j];
            a[j] = temp;
            i++;
            j--
        }
        
    }
    reverse(arr, 0, k-1)
    reverse(arr, k, arr.length - 1)
    reverse(arr, 0, arr.length - 1)
    return arr;
}
console.log('before rotation ==>', array)
console.log('after rotation ==>', rotateArray(array, 6))

// reverse string using recursion
String.prototype.reverse = function() {
    let i = 0, j = this.length - 1, arr = Array.from(this)
    function x() {
        if(i < j) {
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
            x()
        }
    }
    x()
    return arr.reduce((acc, ele) => acc += ele)
}

console.log('abcd'.reverse())

String.prototype.checkPalindrome= function() {
    let i = 0, me = this;
    function x() {
        if(i < parseInt(me.length / 2)){
            if(me[i] === me[me.length - 1 - i]) {
                i++
                if(i === parseInt(me.length/2) - 1) return true
                x()
            } else {
                return false
            }
        }
    }
    if (!x()) return false
    return true
}
console.log('ababa'.checkPalindrome())

Number.prototype.calculatePower = function(m) {
    const x = () => {
        if (m === 0 || this.valueOf() === 0 || this.valueOf === 1) return this.valueOf()
        m--;
        return this * x();
    }
    return x();
}
console.log(Number(0).calculatePower(5))

// bubble sort using recursion

Array.prototype.bubbleSortRecursive = function() {
    function x(arr, n) {
        if (arr.length === 0 || arr.length === 1) return;
        for(let i = 0; i < n ; i++) {
            if(arr[i] > arr[i + 1]) {
                const temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
        if(n > 0) {
            x(arr, n - 1)
        }
    }
    x(this, this.length)
    return this
}

console.log([1,8,7,2,0,1,10,11].bubbleSortRecursive())

Array.prototype.mergeSortRecursive = function() {
    function mergeSort(arr) {
        mergeSortUtil(arr, 0, arr.length - 1)
        return arr
    }
    function mergeSortUtil(arr, s, e) {
        if(s >= e) {
            return
        }
        const m = s + parseInt((e - s) / 2)
        mergeSortUtil(arr, s, m)
        mergeSortUtil(arr, m + 1, e)
        merge(arr, s, m, e)
    }
    function merge(arr, s, m, e) {
        let l = [], r = [], n1 = m - s + 1, n2 = e - m;
        for(let i = 0; i < n1; i++) {
            l.push(arr[s + i])
        }
        for (let i = 0; i < n2; i++) {
            r.push(arr[m + i + 1])
        }
        let i = s, j = 0, k = 0;
        while (j < l.length && k < r.length) {
            if(l[j] < r[k]) {
                arr[i] = l[j]
                j++
            } else {
                arr[i] = r[k]
                k++
            }
            i++
        }
        while(j < l.length) {
            arr[i] = l[j]
            i++
            j++
        }
        while(k < r.length) {
            arr[i] = r[k]
            i++
            k++
        }
    }
    mergeSort(this)
    return this;
}

console.log([1,4,3,2].mergeSortRecursive())

Array.prototype.recursiveQuickSort = function() {
    function quickSort(arr) {
        quickSortUtil(arr, 0, arr.length - 1)
        return arr
    }
    function quickSortUtil(arr, s, e) {
        if (s > e) {
            return
        }
        const pivot = partition(arr, s, e)
        quickSortUtil(arr, s, pivot - 1);
        quickSortUtil(arr, pivot + 1, e)
    }
    function partition(arr, s, e) {
        const pi = arr[e]
        let i = s - 1
        for(let j = s; j <= e; j++) {
            if(arr[j] < pi) {
                i++;
                swap(arr, i, j)
            }
        }
        swap(arr, i + 1, e)
        return i + 1
    }
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp
    }
    return quickSort(this)
}

console.log([12, 11, 13, 5, 6].recursiveQuickSort())

Array.prototype.findTargetSum = function (k) {
    const sortedArr = this.mergeSortRecursive();
    let i = 0, j = sortedArr.length - 1
    while(i <= j) {
        if(sortedArr[i] + sortedArr[j] === k) return {smallIndex: i, largeIndex: j};
        if(sortedArr[i] + sortedArr[j] > k) j--;
        else i++;
    }
    return -1
}

console.log([1,5,2,3,7,6,9,8].findTargetSum(10))

class Stack {
    constructor() {
        this.arr = [];
    }
    push(e) {
        this.arr.push(e);
        return this.arr;
    }
    pop() {
        if(this.arr.length > 0)
            return this.arr.pop();
    }
    top() {
        return this.arr[this.arr.length - 1]
    }
}

class Queue {
    constructor() {
        this.arr = [];
    }
    enqueue(e) {
        this.arr.push(e);
        return this.arr
    }
    dequeue() {
        if(this.arr.length > 0)
        return this.arr.shift()
    }
    front() {
        return this.arr[0]
    }
    rear() {
        return this.arr[this.arr.length - 1]
    }
}

let stack = new Stack();
let queue = new Queue();

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)

console.log(stack.pop())

console.log(queue.dequeue())

console.log(stack, queue)