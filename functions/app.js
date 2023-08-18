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

function printNumbers(element){
    let i = 0;
    if(element === 0){
        return element;
    }
  
    printNumbers(element-1);
  
    console.log(i++);


}

printNumbers(5);

