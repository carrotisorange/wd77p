// Primitive Data Types vs Reference Types
let name = "Andy";  //String Literal
// name = "Scott";
let age = 30; //Number Literal
let isApproved = true; //Boolean Literal
let firstName = undefined; //undefined literal
let selectedPaymentOption = null; //empty literal


const SELECTED_PAYMENT_OPTION = "3.14";

//cannot be a reserved keyword
//should be meaningful
//cannot start with a number
//cannot contain a space oR hyphen

// Object
let car = {
    brand: "Toyota",
    model: "86",
    year: "2023"
};

car.brand = "Honda";

let person = {
    name: "Scott",
    age: 25,
    occupation: "engineer"
};


//dot notation
// let car5 = "brand";
console.log(car.brand);
console.log(person.name);

//bracket notation
// let car5 = "brand";

console.log(car["brand"]);
console.log(person["name"]);

// Array
let cars = [
    'camaro', 
    'civic',
    'prius'
];

let students = [
    'student1', 
    'student2', 
    'student3',
]; 

students[3] = 'Scott';

// Function
function search(keyword){
  return "available";
}

//arrow function es6
search = (keyword) => {
     return "available";
}

// hello = () => {
//   return "Hello World!";
// }

document.all



