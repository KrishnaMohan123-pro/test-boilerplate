/* 
1. steps problem --> we need to reach a place (dest) from another (src)
2. fibonacci Number
3. count ways to reach n stairs --> start at 0th stair need to go to nth but can take only 1 or 2 steps at a time
4. say digits --> input = 412, output = "four one two"
*/
const main = () => {
    // step problem parameters
    const dest = 10, src = 1;
    prob1(src, dest);
    console.log(prob2(10));
    console.log(prob3(4));
    prob4(412);
}

const prob1 = (s, d) => {
    // console.log(s, d);
    // base case
    if(s === d) {
        console.log('Reached!!!');
        return;
    }
    // recursion relation --> f(s, d) = f(s + 1, d);
    prob1(++s, d);
}

const prob2 = n => {
    // base case f(0) = 0, f(1) = 1
    if(n === 0 || n === 1) return n;
    // recursive relation --> f(n) = f(n - 1) + f(n - 2)
    return prob2(n - 1) + prob2(n - 2);
}

const prob3 = n => {
    // base case
    if(n < 0) return 0;
    if (n === 0) return 1;
    // recursive relation --> f(n) = f(n - 1) + f(n - 2) because we can come through 1 stair back or 2 stair back;
    return prob3(n - 1) + prob3(n - 2); //+ prob3(n - 3) + ... in case you can take 3, 4, 5 etc stairs
}

const DigitsArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const prob4 = n => {
    // base case
    if (n === 0) return;
    //  processing part
    // find the last digit
    const digit = n % 10;
    // new value for n
    n = parseInt(n / 10);
    // recursive call
    prob4(n);
    console.log(DigitsArray[digit]);
}


main();