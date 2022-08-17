function flatt(arr) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i]) === false) {
            a.push(arr[i])
        } else if(Array.isArray(arr[i]) === true) {
            a = [...a, ...flatt(arr[i])]
        }
    }
    console.log(a)
    return a
}
// console.log(flatt([7,2,3,[4,5,[4,5,1,[5,6,[2,1,{'name':'Dimich'},3,5,[3,4,5]]]]]]))


function a (num) {
    if(num === 0) return  0
    if(num === 1) return function (num) {return num}

    let arr = []

    function helper (...args) {
        debugger
        arr = [...arr, ...args]
        if(arr.length >= num) {
            arr.length = num
            return arr.reduce((acc,el)=>acc+el)
        } else {
            return helper
        }
    }
    return helper
}
console.log(a(4)(4, 3)(3, 5)(3))

//
// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     _connectedPersons = []
//     introduce () {
//         console.log(`My name is ${this.name}`)
//     }
//     getConnections () {
//         console.log([...this._connectedPersons])
//     }
//     addConnection (person) {
//         this._connectedPersons.push(person.name)
//         person._connectedPersons.push(this.name)
//     }
// }
//
// let Ivan = new Person('Ivan Ivanov')
// let Bob = new Person('bob bobov')
// Ivan.addConnection(Bob)
// Bob.getConnections()
// Ivan.getConnections()
