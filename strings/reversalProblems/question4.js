const getMinRotations = str => {
    // count = 1 because min no. of rotation is 1
    let count = 1;
    while(!sameAsRotation(str, count)) {
        count++;
    }
    return count;
};
const sameAsRotation = (str, count) => {
    let newStr = ''
    for(let i = count; i < str.length; i++) {
        newStr += str.charAt(i);
    }
    for(let i = 0; i < count; i++) {
        newStr += str.charAt(i);
    }
    if(newStr === str) return true;
    return false;
};

console.log(getMinRotations('geeks'));