const input1 = ['coding', 'codezen', 'codingNinjas', 'code']
const input2 = ['abcd', 'efgh', 'ijkl']
const input3 = ['abcd']
function approach1(arr) {
    let str = ''
    let se = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length < arr[se].length) {
            se = i
        }
    }
    let temp = arr[0];
    arr[0] = arr[se];
    arr[se] = temp;
    let flag = true
    for(let i = 0; i < arr[se].length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[0].charAt(i) !== arr[j].charAt(i)) {
                flag = false
                break;
            }
        }
        if(flag) {
            str += arr[0].charAt(i)
        }
    }
    return str
}
console.log(approach1(input1))
console.log(approach1(input2))
console.log(approach1(input3))


function trie() {
    
}