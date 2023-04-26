const main = () => {
    console.log(factorial(5));
    console.log(powerOfTwo(4));
    printCounting(5);
}

const factorial = n => {
    // base case for factorial is 0! = 1;
    // if no base condition --> Uncaught InternalError: too much recursion
    // in base case, return is mandatory
    if(n === 0) return 1;
    // recursive relation --> f(n) = n * f(n - 1)
    // we have bigger problem as f(n) and smaller as f(n - 1)
    const smaller = factorial(n - 1);
    const bigger = n * smaller;
    return bigger;
}

// cleaner code for factorial 
// const factorial = n => {
//     if(n === 0) return 1;
//     return n * factorial(n - 1);
// }

const powerOfTwo = n => {
    // base case
    if(n === 0) return 1;
    // recursive relation --> f(n) = 2 * f(n - 1)
    return 2 * powerOfTwo(n - 1);
}

const printCounting = n => {
    if(n === 0) return;
    console.log(n);
    printCounting(n - 1);
}

main();