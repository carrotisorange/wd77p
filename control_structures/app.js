// Control Structures
// 1. Sequential - default
// 2. Decision
//     -if...else
//     -switch
// 3. Iteration
//     -while
//     -for,
//      -for...in, 
//      -for-of
// 4. Jump 
//     -break
//     -continue
//     -


//     for (field in fields){

//     }

//decision control structures

// 6-12 -- good morning
// 13-18 -- good afternoon
// beyond 18 -- good evening

// let time = 12;

// if(time > 6 && time <= 12){
//     console.log('Good morning!');
// }else if(time >  13 && time <= 18){
//     console.log('Good afternoon!');
// }else{
//     console.log('Good evening!');
// }

// Grading System

// let gender = null;

// gender = 'M';

// // //switch 
// switch(gender){

//     case 'M':
//     case 'm': 
//     console.log('Male');
//     break;

//     case 'F':
//     case 'f': 
//     console.log('Female');
//     break;

//     default:
//     console.log('Unknown');   
// }

//iteration

//while

let endOfTheNumber = 10;

// let isDone = true;
let i = 1;

// while (i <= 5) {
//   console.log('Hello World', i);
//   i++;
// }

//for
// for(initialValue; condition; modifyValue;){
//     statements
// }

// for(let i = 10; i >= 1; i--){
//     console.log('Hello World', i);
// }


let numbers = [9,2,5,1,6];

let persons = {
    name:'James',
    age: 40
};


// for(let number in numbers){
//     console.log(numbers[number]);
// }

// for(person in persons){
//     console.log(person);
// }

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// for...in
// let j = 0;
// for(number in numbers){
//     j++
//     console.log(number);
// }

//for...of
// for(number of numbers){
//     console.log(number);
// }

for(let input = 1; input <= 10; input++){
    console.log('enter the',input,'integer:');
}