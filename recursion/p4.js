/*
1. reverse a string
2. check Palindrome
3. a to the power b
4. solution to 3 with optimization
5. Bubble Sort
// TO-DO: selection and Insertion sort
*/

const main = () => {
    const str1 = `abcdef`;
    const str2 = 'abcdcba';
    const arr1 = [1, 3, 2, 5, 4, 7, 6];
    console.log(prob1(str1));
    console.log(prob2(str2));
    console.log(prob3(2, 5));
    console.log(prob4(2, 5));
    console.log('before sorting', arr1);
    prob5(arr1);
    console.log('after sorting', arr1);
};

const reverse = (str, i) => {
    if (i >= str.length / 2) return;
    const temp = str[i];
    str[i] = str[str.length - 1 - i];
    str[str.length - 1 - i] = temp;
    reverse(str, ++i);
};

const prob1 = str => {
    // converting str to arr because str is immutable in js;
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.charAt(i));
    }
    reverse(arr, 0);
    // arr to string
    return arr.reduce((acc, ele) => acc += ele, '');
};

const checkPallindrome = (str, i) => {
    if (i >= str.length / 2) return true;
    if (str[i] !== str[str.length - 1 - i]) return false;
    return checkPallindrome(str, ++i);
};

const prob2 = str => {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.charAt(i));
    }
    return checkPallindrome(arr, 0);
};

const prob3 = (a, b) => {
    if (b === 0) return 1;
    return a * prob3(a, --b);
};

const prob4 = (a, b) => {
    if (b === 0) return 1;
    if (b === 1) return a;
    const ans = prob4(a, parseInt(b / 2));
    if (b % 2 === 0) return ans * ans;
    return a * ans * ans
}

const prob5 = arr => {
    if(arr.length === 0 || arr.length === 1) return;
    // ith largest element is now at ith position
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    prob5(arr.slice(0, -1));
}

main();