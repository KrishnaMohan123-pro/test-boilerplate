console.log('Hello World');

function outer(b) {
    function inner() {
        console.log(a,b)
    }
    const a = 10;
    return inner;
}

outer(15)()


// setTimeout(function cb() {
//     console.log('CB SetTimeout')
// }, 5000)

// const start = new Date().getTime();
// let end = start;
// while (end < start + 10000) {
//     end = new Date().getTime();
// }
// console.log('10sec passed')


// prototype and prototypical inheritence
Array.prototype.calculate = function(logic) {
    const output =[];
    for(let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

const object1 = {
    name: 'Krishna',
    city: 'Dhanbad'
}

const object2 = {
    name: 'Mohan'
}

object2.__proto__ = object1


// call, apply and bind methods
const name = {
    firstName: 'Krishna',
    lastName: 'Mohan',
    printName: function() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

const printName = function (homeTown, state) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + homeTown + ', ' + state);
}

const name2 = {
    firstName: 'Kailash',
    lastName: 'Kher'
}

name.printName.call(name2)
// invokes the function directly
printName.call(name2, 'Dhanbad', 'Jharkhand')
// invokes directly but accepts set of arguments
printName.apply(name, ['Dhanbad', 'Jharkhand'])
// keeps copy of the method with arguments which can be used later
const printMyName = printName.bind(name, 'Dhanbad', 'Jharkhand');

printMyName();


// currying -> copying the given function and making our own copy using bind method
const multiply = function(x, y) {
    console.log(x * y)
}

const multiply2 = multiply.bind(this, 2)

multiply(2,5);
multiply2(5);

// using closers
function closeMultiply(x) {
    return function (y) {
        console.log(x * y)
    }
}

const closeFun2 = closeMultiply(2);
closeFun2(3);

const user = {
    name: 'Krishna Mohan',
    address: {
        personal: {
            city: 'Dhanbad',
            area: {
                locality: 'Koyla Nagar'
            }
        },
        professional: {
            city: 'Pune'
        }
    }
}
// Write a function to:-
// create new object like - { user_name: 'Krishna Mohan', user_address_personal_city: 'Dhanbad'...}
const finalObj = {}
function createNewObj (obj, parent) {
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            createNewObj(obj[key], parent + '_' + key);
        } else {
            finalObj[parent + '_' + key] = obj[key]
        }
    }
}

createNewObj(user, 'user')
console.log(finalObj)

// find sum of the numbers
// sum(1)(2)(3)(4)(5)(6)(7)()
console.log(sum(1)(2)(3)(4)(5)(6)(7)())
function sum(n) {
    return function(m) {
        if (m) return sum(n + m)
        else return m
    }
}
const alternateSum = a => b => b ? sum(a+b): a;
console.log(alternateSum(1)(2)(3)(4)(5)(6)(7)())


async function myFun() {
    let p1 = new Promise((res, rej) => {
        setTimeout(()=>{
            res('p1')
        }, 3000)
    })
    let p2 = new Promise((res, rej) => {
        setTimeout(()=>{
            res('p2')
        }, 5000)
    })
    const r1 = await p1;
    const r2 = await p2;
    return [r1, r2]
}
const fn = async () => {
console.log(await myFun());    
}
fn()


// write code for fibonacci series using Memoization

function fibonacci(n, cache) {
    cache = cache || {};
    if (cache[n]) return cache[n]
    if(n <=1 ) return 1
    return cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache)
}

console.log(fibonacci(4))



Array.prototype.filterImplementation = function(logic) {
    const output = [];
    for(let i = 0; i < this.length; i++) {
        if(logic(this[i])) {
            output.push(this[i])
        }
    }
    return output
}