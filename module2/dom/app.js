//DOM manipulation
// console.dir(document.all);
// document.title = 'Edited Bootstrap Demo';
// 1. select Element
// 2. addeventlistener
// 3. styling 

//SELECTING ELEMENTS

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

// let liItem = document.querySelector('.list-group li');
// console.log(liItem.innerText);

//querySelectorAll()

// innerHTML = <h3>Text</h3>

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// } 

// :last-child, nth-child(2), nth-child(odd)


//TRAVERSING THE DOM

//parentNode
// let parentNodeOfLi = document.querySelector('.list-group-item');
// console.log(parentNodeOfLi.parentNode.innerText);
// parentNodeOfLi.parentNode.style.color = 'red';
//parentElement

// childNode - have to remove linebreak to get rid of the text node 
// let childNodeOfUl = document.querySelector('.list-group');
// console.log(childNodeOfUl.childNodes);
// parentNodeOfLi.parentNode.style.color = 'red';

//children
// let childNodeOfUl = document.querySelector('.list-group');
// console.log(childNodeOfUl.children);
// firstChild - need to remove the linebkreak to get rid of the text node
// let childNodeOfUl = document.querySelector('.list-group');
// console.log(childNodeOfUl.firstChild);

//firstElementChild
// let childNodeOfUl = document.querySelector('.list-group');
// console.log(childNodeOfUl.firstElementChild.innerText);


// lastChild - need to remove the linebkreak to get rid of the text node
// let lastChildOfUl = document.querySelector('.list-group');
// console.log(lastChildOfUl.lastChild);

// lastElementChild
// let lastChildOfUl = document.querySelector('.list-group');
// console.log(lastChildOfUl.lastElementChild.innerText);

//nextSibling - need to remove the linebkreak to get rid of the text node
// let nextSiblingOfUl = document.querySelector('.list-group-item');
// console.log(nextSiblingOfUl.nextSibling);

//nextElementSibling
// let nextSiblingOfLi = document.querySelector('.list-group-item');
// console.log(nextSiblingOfLi.nextElementSibling.innerText);

//previousSibling - need to remove the linebkreak to get rid of the text node
// let previousSiblingofLi = document.querySelector('.list-group-item');
// console.log(previousSiblingofLi.previousSibling.innerText);

//previousElementSibling
// let previousSiblingOfLi = document.querySelector('.list-group-item');
// console.log(previousSiblingOfLi.previousElementSibling);

//ADDING ELEMENTS
//createElement
// let newDiv = document.createElement('div');

// //className
// newDiv.className = 'newClassName';

// //id
// newDiv.id = 'newId';


// //setAttribute
// newDiv.setAttribute('title', 'This a new div');
// console.log(newDiv);

// //createTextNode - newDivText = 
// let divTextNode = document.createTextNode('This is a new div');

// //appendChild - newDiv.appendChild(newDivText)
// newDiv.appendChild(divTextNode);

// //insertBefore(itemtobeinserted, insertingbfore)
// let navBar = document.querySelector('.container-fluid');
// let navBarToggler = document.querySelector('.nav-link .disabled');

// navBar.insertBefore(newDiv, navBarToggler);

// document.getElementById('newId').style.color = 'red';


//ADDING EVENT LISTENER
//  e.type - action done - 
// e.clientX - position of the mouse from left to right
// e.clientY -position of the mouse from top to bottom
// e.offsetX - from the actual element
// e.offsetY
// e.altKey, shiftKey, ctrlKey -  hold down a particularKey
// e.preventDefault
// function buttonClick(e){
//     console.log('button clicked');
//     e.target.id
     
// }

// let searchButton = document.getElementById('touchpad');

// searchButton.addEventListener('click', runEvent);
// searchButton.addEventListener('dblclick', runEvent);
// searchButton.addEventListener('mousedown', runEvent);
// searchButton.addEventListener('mouseup', runEvent);
// searchButton.addEventListener('mouseenter', runEvent);
// searchButton.addEventListener('mouseleave', runEvent);
// searchButton.addEventListener('mouseout', runEvent);
// searchButton.addEventListener('mouseover', runEvent);
// searchButton.addEventListener('mousemove', runEvent);
// searchButton.addEventListener('oncontextmenu', runEvent);
let output = document.getElementById('output');

let searchInput = document.getElementById('search-input');

searchInput.addEventListener('keydown', runEvent);
searchInput.addEventListener('keyup', runEvent);
searchInput.addEventListener('keypress', runEvent);
searchInput.addEventListener('focus', runEvent);
searchInput.addEventListener('blur', runEvent);
searchInput.addEventListener('input', runEvent);

function runEvent(e){
    console.log(e.type);
    console.log(e.target.value);
    output.innerHTML = '<h3>Searching for : '+ e.target.value +'</h3>';
}

//addEventListener
// types of event
//mouse - click, dblclick, mousedown, mouseup, mouseenter, mouseleave, mouseout, mouseover, mousemove
//keyboard - keydown, keyup, keypress, focus, blur,  input,    e.target.value
//dropdown - change
// var button = document.getElementById('search-button').addEventListener('click', function(){
//     console.log('button clicked');
//     document.getElementById('input-field').placeholder = 'Searching';
//     document.querySelector('.navbar-brand').style.backgroundColor = 'red';
// });

// var button = document.getElementById('search-button').addEventListener('click', function(){
//     console.log('button clicked');
//     document.getElementById('input-field').placeholder = 'Searching';
//     document.querySelector('.navbar-brand').style.backgroundColor = 'red';
// });

// var button = document.getElementById('search-button').addEventListener('mousedown', runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE:' + e.type);
    
//     //output the position of the mouse
//     output.innerHTML = '<h3>MouseX: '+ e.offSetX +'</h3> <h3>MouseY:'+ e.offSetY+'</h3>' 
// }













