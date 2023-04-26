/* 
1. Merge Sort --> create new array and copy values
*/


const main = () => {
    // const arr1 = [1, 3, 2, 5, 4, 7, 6];
    // prob1(arr1);
    // console.log(arr1);
};
// JavaScript program for Merge Sort
 
// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
    // var L = new Array(n1);
    var L = [];
    // var R = new Array(n2);
    var R = [];
    for (var i = 0; i < n1; i++) L.push(arr[l + i]);
    for (var j = 0; j < n2; j++) R.push(arr[m + 1 + j]);
    var i = 0;
    var j = 0;
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
function mergeSort(arr,l, r){
    if(l>=r){
        return;
    }
    var m = parseInt((l + r) / 2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}
 
// UTILITY FUNCTIONS
// Function to print an array
function printArray( A, size)
{
    console.log(A);
}
 
 
var arr = [ 12, 11, 13, 5, 6, 7 ];
    var arr_size = arr.length;
 
    console.log(  "Given array is <br>");
    printArray(arr, arr_size);
 
    mergeSort(arr, 0, arr_size - 1);
 
    console.log( "<br>Sorted array is <br>");
    printArray(arr, arr_size);

main();