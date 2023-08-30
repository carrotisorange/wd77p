//var, let, and const declarations
// let name = 'Scott';
// console.log(name);

// // let anotherName = 'Lang';
// // console.log(anotherName);

// name = 'Lang';
// console.log(name);

// for (var j = 0; j < 5; j++) {
//     console.log(j);   
// }

// console.log(j);

// for (let i = 0; i < 5; i++) {
//     console.log(i);   
// }

// console.log(i);

// function printNumbers(){
//     for (let i = 0; i < 5; i++) {
//         console.log(i);   
//     }

//     console.log(i);
// }

// printNumbers();

// function printSomething(){
//     let a = 1;
//     if(true){
//         let a = 2;
//         console.log(a);
//     }
//     console.log(a);
// }

// printSomething();

// const i = 10;
// {
//  const i = 20;
//  console.log('inside:', i); // inside: 20
// //  i = 30;
// //  console.log('i again:', i); // i again: 30
// }

// console.log('outside:', i); // outside: 10

//const

//declaration
// const number = 20;

// // // assignment
// // number = 10;

// console.log(number);

// //redeclaration
// const number 10;

// const arr = [1, 2, 3, 4];

// arr.push(5);

// console.log(arr);

// const obj = {
//     name: 'David',
//     age: 30
// };

// obj.age = 40;

// console.log(obj); // { name: 'David', age: 40 }

// const obj = { name: 'David', age: 30 };
// console.log(obj);
// const obj1 = { name: 'Mike', age: 40 };
// console.log(obj1);
// obj = obj1; // Uncaught TypeError: Assignment to constant variable.

// const arr = [1, 2, 3, 4];
// arr = [10, 20, 30]; // Uncaught TypeError: Assignment to constant variable.

//classes

// class User{
//     printUser(){
//         console.log("User 1 info");
//     }

//     static getUser(){
//         console.log("I'm user 1");
//     }
// }

// //instantiate
// let newUser = new User();

// newUser.printUser();

// // no need to instantiate
// User.getUser();

//template strings
// let name = 'Juan';

// let template = `<h1>${sayHelloWorld(name)}</h1>`

// document.getElementById('div').innerHTML = template;


// let template = `<h1>Hello,
// World!</h1>`

// template = `<h1>Hello,
// ${name}!</h1>`

// template = `<h1>${sayHelloWorld(name)}</h1>`


// function sayHelloWorld(name){
//     return 'Hello, ' + name + "!";
// }

//string features
let name = 'hello ';

// // checking for inclusion
// console.log(name.startsWith('h'));
// console.log(name.endsWith('o'));
// console.log(name.includes('l'));

// console.log(name.startsWith('h', 0));

// //repeat strings
// console.log(name.repeat(3));

// // hexadecimal
// console.log(0xFF);
// // // binary
// console.log(0b101011);
// // // Octal
// console.log(0o543);
//math and number features
// console.log(Number.isFinite(3));

// console.log(Number.isFinite(-3));

// console.log(Number.isFinite(Infinity));

// console.log(Number.isFinite(NaN));

// console.log(Number.isNaN(1));

// console.log(Number.isNaN(NaN));

// console.log(Number.isInteger(2.1));


//new data structures
//set
// let myArray = [11,22,34,65,65];
// // console.log(myArray);
// let mySet = new Set(myArray);


// mySet.add('100');
// mySet.add({a:1, b:2 });
// mySet.delete(22);
// // mySet.clear();
// mySet.add(10);

// console.log(mySet);
// console.log(mySet.size);

// mySet.forEach(function(val){
//     console.log(val);
// });

// //map - key value pair
// let myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);
// myMap.set('cs', 'Foo');
// console.log(myMap);
// myMap.delete('a1');
// console.log(myMap);
// console.log(myMap.size);

//weak set
// let weakSet = new WeakSet();  
// let obj = {msg:"hello"}; 
// weakSet.add(obj); 
// console.log(weakSet.has(obj)); 
// weakSet.delete(obj); 
// console.log(weakSet.has(obj));
//iterators


//generators


//promises and async data
// const promise = new Promise(function(resolve, reject){

// });


// const promise = new Promise(function(resolve, reject) {
//  setTimeout(function() {
//   const sum = 4 + 5;
//   resolve(sum);
//  }, 2000);
// });

// promise.then(function(result) {
//  console.log(result); // 9
// });

// add error handling
// const promise = new Promise(function(resolve, reject) {
//  setTimeout(function() {
//   const sum = 4 + 5 + 'a';
//   if(isNaN(sum)) {
//     reject('Error while calculating sum.');
//   } else {
//     resolve(sum);
//   }
//  }, 2000);
// });

// promise.then(function(result) {
//  console.log(result);
// });


//add catch to handle the error
// const promise = new Promise(function(resolve, reject) {
//  setTimeout(function() {
//   const sum = 4 + 5 + 'a';
//   if(isNaN(sum)) {
//     reject('Error while calculating sum.');
//   } else {
//     resolve(sum);
//   }
//  }, 2000);
// });

// promise.then(function(result) {
//  console.log(result);
// }).catch(function(error) {
//  console.log(error);
// });


//arrow functions

function printSomething(firstNumber=1, secondNumber=1){
    console.log( firstNumber * secondNumber);
}

printSomething();

// let x =  (firstNumber) => firstNumber * secondNumber;

// let y = x(1,2);
// console.log(y); 
