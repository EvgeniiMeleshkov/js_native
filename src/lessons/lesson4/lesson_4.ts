console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
const promise = new Promise(() => {
    console.log('Promise is created')
})

console.log(promise)
// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const promise2 = new Promise((res, rej) => {
    res('Promise data')
    rej(null)
})
console.log(promise2.then(res => console.log(res)))

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
const promise3 = new Promise((res, rej) => {
    rej('Promise Error')
})
console.log(promise3.then(res => console.log(res)).catch(rej => console.log(rej)))


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const promise4 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Promise 4 Data')
    }, 3000)
})
console.log(promise4.then(res => console.log(res)).catch(rej => console.log(rej)))


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

const promiseMyName = new Promise((res, rej) => {
    setTimeout(() => {
        return res('My name is')
    }, 1000)
})

//@ts-ignore
function onSuccess(parametr) {
    return `${parametr} John`
}

//@ts-ignore
function print(parametr) {
    console.log(parametr)
}

promiseMyName.then(res => {
     return onSuccess(res)
    }).then(res => {
      print(res)
    })

//----------------------------------------------------------


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}


const promiseName = new Promise((res, rej)=>{
    setTimeout(()=>{
        res({name: 'Anna'})
    }, 2000)
})

const promiseAge = new Promise((res, rej)=>{
    setTimeout(()=>{
        res({age: 16})
    }, 3000)
})

const promiseCity = new Promise((res, rej)=>{
    setTimeout(()=>{
        res({city: ''})
    }, 4000)
})
const obj = {}
//@ts-ignore
promiseName.then(res => obj.name = res.name)
//@ts-ignore
promiseAge.then(res => obj.age = res.age)
//@ts-ignore
promiseCity.then(res => obj.city = res.city)

setTimeout(()=>{
    console.log(obj)
}, 5000)




const promiseName1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: 'Anna'})
    }, 2000)
})

const promiseAge1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({age: 16})
    }, 3000)
})

const promiseCity1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({city: ''})
    }, 4000)
})
//@ts-ignore
Promise.all([promiseName1.then(res => res.name),
    //@ts-ignore
    promiseAge1.then(res=>res.age),
    //@ts-ignore
    promiseCity1.then(res=>res.city)])
    .then(param=>console.log({name: param[0], age: param[1], city: param[2]}))
