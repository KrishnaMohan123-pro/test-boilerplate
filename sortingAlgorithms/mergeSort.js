const mergeSort = arr => {
    // function to call merge sort
    mergeSortUtil(arr, 0, arr.length - 1);
    return arr;
};

const mergeSortUtil = (arr, s, e) => {
    // base case if start index >= end index
    if(s >= e) return;
    /* 
        calculating mid which is start + end divided by 2
        efficient method if we use s + parseInt((e - s) / 2);
        for larger nums it will give better solution
    */
    const mid = parseInt((s + e) / 2);
    // recursively dividing array into 2 parts
    mergeSortUtil(arr, s, mid);
    mergeSortUtil(arr, mid + 1, e);
    // merging the divided parts
    merge(arr, s, mid, e);
};

const merge = (arr, s, m, e) => {
    let l = [], r = [], n1 = m - s + 1, n2 = e - m;
    /* 
        l = left part of array
        r = right part of array
        n1 and n2 are the lengths for the left part and right part respectively
    */
    for(let i = 0; i < n1; i++) {
        l.push(arr[s + i]);
    }
    for(let i = 0; i < n2; i++) {
        r.push(arr[m + i + 1]);
    }
    // using the start index for each merge
    let i = s, j = 0, k = 0;
    // merging 2 sorted linked list
    while(j < l.length && k < r.length) {
        if(l[j] < r[k]) {
            arr[i] = l[j];
            j++;
        } else {
            arr[i] = r[k];
            k++;
        }
        i++;
    }
    // if left part has remaining elements
    while(j < l.length) {
        arr[i] = l[j];
        j++;
        i++;
    }
    // if right part has remaining elements
    while(k < r.length) {
        arr[i] = r[k];
        k++;
        i++;
    }
}

const array = [12, 11, 13, 5, 6];
console.log(mergeSort(array));

const a = mergeSort(array);
