// function firstFunction(){
//     secondFunction();
//     console.log('first function');
// }

// function secondFunction(){
//     thirdFunction();
//     console.log('second function');
// }

// function thirdFunction(){
//     console.log('third function');
// }

// firstFunction();

//recursion
// function printNumbers(element){
//     let i = 0;
//     if(element === 0){
//         return element;
//     }
  
//     printNumbers(element-1);
  
//     console.log(i++);


// }

//scope
// printNumbers(5);

// function scope
// function printSomething(){
//     let x = 10;
//     const y= 20;
//     var z = 30;

//     console.log(x,y,z);
// }

//  printSomething();

//  console.log(x,y,z);

// var x = 10;
// const y = 20;
// let z =30;

// function printSomething(){
//     console.log(x, y, z);
// }

// printSomething();

//nested functions
// function outer(){
//     console.log('outer');

//     function inner(){
//         console.log('inner');
//     }

//     inner();
// }

// outer();

// examples of nested function
// function triangleHypotenuse(base, height){
//     function square(side){
//         return side * side;
//     }

//     return Math.sqrt(square(base) + square(height));
// }

// console.log(triangleHypotenuse(1,1));

// function addNum(a,b)
// {
 
// //  nested function 
//   function printResult(message)
//   {
//     console.log(message);
//   }
 
//   let result=a+b;
 
// // invoking the nested function
//   printResult("The sum is: " + result);
// }
 
// addNum(1,2)

//closure
// function outer(x){
// // closure
//     function inner(y){
//         return x + y;
//     }

//     return inner;
// }
 
// // console.log(outer());
// const outerReturn = outer(10);
// // console.log(outerReturn);
// console.log(outerReturn(2));

// examples of closure
// function numberGenerator() {
// // Local “free” variable that ends up within the closure
//   var num = 1;
//   function checkNumber() { 
//     console.log(num);
//   }
//   num++;
//   return checkNumber;
// }

// console.log(numberGenerator());

// var number = numberGenerator();
// number(); // 2

//callback function
// function foo(bar){
//     bar(); //callback function
// }

// foo(function(){ //anonymous function
//     console.log('bar');
// });

// function(){ //anonymous function
//     console.log('bar');
// }

// function with name
// function bar(){
//     console.log('bar')
// }

// foo(bar);

// function processPayment(isOnline, status){
//     if(isOnline){
//        status();
//     }else{
//         console.log('Offline payment is not working.');
//     }
// }

// processPayment(false, function status(){
//     console.log('Online payment is successful.');
// });

//hof - in callback it can't return a function but in hof it can.
// -- callback
// function getCar(car){
//     car();
// }

// getCar(function(){
//     console.log('Chevy');
// });

// function returnAFunction(){
//     return function(){
//         console.log('returning...');
//     }
// }

// let sampleFunction = returnAFunction();
// // console.log(sampleFunction);
// console.log(sampleFunction());

// pure function
// function sayGreeting(name){
//     return `Hello ${name}`;
// }

//impure function
// function sayGreeting(name){
//     let greeting = "Hola"; //side effect
//     return `${greeting} ${name}`;
// }

// sayGreeting('Andy');

// console.log(sayGreeting('andy'));

//iief

//regular function
function x(){

}

x();

// anonymous function - cant be done.
(function(){

})

// (function (){

// });

// console.log((function (){
//    console.log('IIFE'); 
// })()
// );

// it was created before es6
// it could get polluted





