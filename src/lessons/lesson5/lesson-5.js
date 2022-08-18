let someObj = {
    name: 'Eugene',
    age: 32
}

function greeting() {
    console.log(`My name is ${this.name}. I am ${this.age}`)
}

someObj.greeting = greeting
someObj.greeting()

//==================================================================//

const counter = {
    count: 0,
    getCurrentCount() {
        console.log(this.count)
        return this.count
    },
    increment() {
        this.count++
        console.log(this.count)
        return this
    },
    decrement() {
        this.count--
        console.log(this.count)
        return this
    },
    setCurrentCount(num) {
        this.count = num
        console.log(this.count)
        return this
    },
    resetCurrentCount() {
        this.count = 0
        return this
    }
}
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.decrement()
// counter.decrement()
// counter.decrement()
// counter.getCurrentCount()
// counter.setCurrentCount(3)
// counter.resetCurrentCount()
// counter.getCurrentCount()
counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount()

//=====================================================================//

function MyFirstConstructorFunc (name, age) {
    this.name = name;
    this.age = age;
    this.greeting = greeting
    return this
}
const john = new MyFirstConstructorFunc('John', 30)
john.greeting()

//=======================================================================//

let One = {name: 'One'};
let Two = {name: 'Two', sayHello: function() {console.log(`Hello, my name is ${this.name}`)}};


Two.sayHello.call(One)

//=======================================================================//

const helperObj = {
    changeName(name) {
        return this.name = name
    },
    setAge(age) {
        return this.age = age
    },
    greeting: Two.sayHello
}

const a = {}
a.name = helperObj.changeName('Viki')
a.age = helperObj.setAge(24)
helperObj.greeting.call(a)
console.log(a)

//=========================================================================//
//
// function sumTwoNumbers(a ,b) {return a + b}
//
// function bindNumber(foo, number) {
//         function inner (num) {
//         console.log(num + this)
//     }
//     return inner.bind(this)
// }
//
// bindNumber(sumTwoNumbers(1,2), 3)(3)