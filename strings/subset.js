Array.prototype.findSubsets = function() {
    const ans = []
    function subset(arr, output, i, ans) {
        if(i >= arr.length) {
            ans.push(output)
            return
        }
        // exclude case
        subset(arr, [...output], i + 1, ans)
        // include case
        const element = arr[i]
        output.push(element)
        subset(arr, [...output], i + 1, ans)
    }
    subset(this, [], 0, ans)
    return ans
}

console.log([1,2,3].findSubsets())
// non empty substring
String.prototype.findSubsequences = function() {
    const ans = []
    function subSequence(str, output, i, ans) {
        if(i >= str.length) {
            ans.push(output);
            return
        }
        // exclude case
        subSequence(str, output, i + 1, ans)
        // include case
        const char = str.charAt(i)
        output += char
        subSequence(str, output, i + 1, ans)
    }
    subSequence(this, '', 0, ans)
    return ans.filter(e => e.length > 0)
}
console.log('abc'.findSubsequences())

// phone problem --> 2 -> abc, 3 -> def etc
String.prototype.phoneProblem = function() {
    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    let newstr = ''
    for(let i = 0; i < this.length; i++) {
        newstr += phoneMap[this.charAt(i)]
    }
    console.log(newstr) 
    return newstr.findSubsequences().filter(e => e.length === 2)
}
console.log('23'.phoneProblem());

// permutations of String
Array.prototype.permutations = function() {
    const set = new Set()
    function x(arr, i) {
        if(i >= arr.length) {
            set.add(arr)
            return
        }
        for(let j = 0; j < arr.length; j++) {
            swap(arr, i, j)
            x(arr, i + 1)
            swap(arr, i, j)
        }
    }
    function swap(arr, i ,j) {
        const temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
    }
    x(this, 0)
    return [...set]
}

console.log([1,2,3].permutations())