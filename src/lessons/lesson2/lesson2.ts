console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
//@ts-ignore
function sum(a) {
    //@ts-ignore
    return function sumInner(b) {
        return a + b
    }
}


console.log(sum(3)(6))
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// Task 02
//@ts-ignore
function makeCounter() {
    let count = 1
    return function () {
        console.log(count++)
    }
}

// Реализовать функцию makeCounter которая работает следующим образом:
const counter = makeCounter();
counter(); // 1
counter(); // 2
const counter2 = makeCounter();
counter2(); // 1
counter(); // 3

// Task 03
//@ts-ignore
function makeCounter2(value) {
    let count = value
    return {
        increase() {
            return ++count
        },
        decrease() {
            return --count
        },
        reset() {
            return count = 0
        },
        //@ts-ignore
        set(val) {
            return count = val
        }
    }
}

const l = makeCounter2(1)
console.log(l.increase())
console.log(l.decrease())
console.log(l.reset())
console.log(l.set(5))
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
//@ts-ignore
function superSum(n) {
    if (n === 0) return 0;
    //@ts-ignore
    if (n === 1) return (num) => num;
//@ts-ignore
    let _arguments = [];
//@ts-ignore
    function helper(...args) {
        //@ts-ignore
        _arguments = [..._arguments, ...args];
        if (_arguments.length >= n) {
            _arguments.length = n;
            return _arguments.reduce((acc, number) => acc + number)
        } else {
            return helper;
        }
    }
    return helper;
}

// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
console.log(superSum(0)) //0
//@ts-ignore
console.log(superSum(5)(2)(5)(4)(3,2)) //16
//@ts-ignore
console.log(superSum(3)(2)(5, 3)) //10
//@ts-ignore
console.log(superSum(3)(2, 5, 3)) //10
//@ts-ignore
console.log(superSum(3)(2, 5)(3)) //10
//@ts-ignore
console.log(superSum(3)(2, 5)(3, 9)) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

//1-st
//@ts-ignore
function cycleSumTo(n) {
    let res = 0
    for (let i = n; i > 0; i--) {
        res += i
    }
    return res
}

//@ts-ignore
function recSumTo(n) {
    if (n === 0) return 0
    else {
        return n += recSumTo(n - 1)
    }
}

//@ts-ignore
function arithmSumTo(n) {
    if (n === 0) return 0
    else {
        return ((1 + n) / 2) * n
    }
}

console.log(arithmSumTo(100)); // 5050

//2-nd
//@ts-ignore
function factorial(n) {
    if (n === 1) return 1
    else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5)) // 120

//3-rd
//@ts-ignore
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

//@ts-ignore
function fibCycle(n) {
    let a = 1
    let b = 1
    for (let i = 3; i <= n; i++) {
            let c = a + b
        a = b
        b = c
    }
    return b
}

console.log(fibCycle(3)); // 2
console.log(fib(7)); // 13
console.log(fibCycle(77)); // 5527939700884757
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
//@ts-ignore
function flatt(arr) {
    //@ts-ignore
    let a = []
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i]) === false) {
            a.push(arr[i])
        } else if(Array.isArray(arr[i]) === true) {
            //@ts-ignore
            a = [...a, ...flatt(arr[i])]
        }
    }
    console.log(a)
    return a
}
//@ts-ignore
console.log(flatt([7,2,3,[4,5]]))

