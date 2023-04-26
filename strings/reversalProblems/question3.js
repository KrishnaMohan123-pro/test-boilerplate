const printAllRotations = str => {
    let i = 0;
    while(i < str.length) {
        let res = '';
        for (let j = i; j < str.length; j++) {
            res += str.charAt(j);
        }
        for(let j = 0; j < i; j++) {
            res += str.charAt(j);
        }
        console.log(res);
        i++;
    }
};

const method2 = str => {
    const newStr = str.concat(str);
    console.log(newStr);
    for(let i = 0; i < str.length; i++) {
        console.log(newStr.slice(i, str.length + i));
    }
}

method2('geeks')