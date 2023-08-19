// function printMultiplicationTable(range){
//     const NUMBER = 10;
//     const RANGE = range;
//     let i= 1;

//     while(i<=RANGE) {
//         const result = i * 10;
//         console.log(`${NUMBER} * ${i} = ${result}`);
//         i++;
//     }
// }


// function printChristmasTree(height){ 
//     for(i=1; i<=height; i++)
//     {  
//         //Prints the pyramid pattern
//         for(j=1; j<=(2*i-1); j++)
//         {
//             document.write('*');
//         }
 
//         document.write('<br>');

//     }
// }

// let start = Date.now();
// printChristmasTree(1000);
// let timeTaken = Date.now() - start;
// console.log("Total time taken : " + timeTaken + " milliseconds");

function countCharacters(input){
let sentence =  input;

const VOWELS = ['a','e','i','o','u'];
const DIGITS = ['0','1','2','3','4', '5', '6', '7', '8', '9'];
let vowel = 0;
let consonant = 0;
let digit = 0;
let space = 0;
  
  for(let char of sentence){
    char  = char.toLowerCase();

    if(VOWELS.includes(char)){
      vowel++;
    }else if(DIGITS.includes(char)){
         digit++;
    }else if(char === ' '){
        space++;
    }else{
        consonant++;
    }

  }

  console.log('vowel:', vowel);
  console.log('consonants:', consonant);
  console.log('digits:', digit);
  console.log('spaces:', space);

}

let start = Date.now();
countCharacters('this website is aw3som3 this website is aw3som3 this website is aw3som3 this website is aw3som3 this website is aw3som3 this website is aw3som3 this website is aw3som3 this website is aw3som3 this website is aw3som3');
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");



