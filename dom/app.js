//DOM manipulation
// console.dir(document.all);
// document.title = 'Edited Bootstrap Demo';
// 1. select Element
// 2. addeventlistener
// 3. styling 

//getElementById()
// let first = document.getElementById('first');
// console.log(first.innerText);
// console.log(first.textContent);
// first.style.color = 'red';
// first.style.fontFamily = 'serif';

//getElementsByClassName()
// let first = document.getElementsByClassName('first');
// console.log(first);
// first[0].innerText = 'second';
// console.log(first.textContent);
// first.style.color = 'red';
// first.style.fontFamily = 'serif';


//getElementsByTagName()
// let first = document.getElementsByTagName('th');
// console.log(first[1].innerText);
// first[0].innerText = 'second';

//querySelector()
// let first = document.querySelector('th');
// console.log(first);

//querySelectorAll()
let first = document.querySelectorAll('th');
console.log(first[0].innerText);



