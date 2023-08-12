// let arr = [1,5,123,123,678,1,678,15,856,121,745,115]
// printNumbers(arr);
// searchArray(arr, number);

function addElement(size, number){
    let arr = [];
    console.log('Before:', arr.length)
    for(let i = 0; i <= size; i++){
        arr.push(Math.random()*100);
    }
    arr.push(number);
    console.log('After:', arr.length);
}

let start = Date.now();
addElement(10000000);
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");

function searchArray(arr, number){
    //check if the number is in the array
    let result;
    for(let i = 0; i<= arr.length; i++){
         //yes return the index number
        if(number === arr[i]){
            result = `found in index ${i}`;
            break;
         //no print not found
        }else{
            result = 'not found!';
        }
    }
    
    console.log(result);
}

function printNumbers(arr){
    // 1+1 = 2

    // console.log(arr[1]); //o(1)
    // console.log(arr[2]); //o(1)
    //o(n)

    // // o(1) + o(n) = o(n)
    // o(1+n+m) = o(n)
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }

    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }
    // // o(1 + n + m ) = o(n) 
    // console.log(arr[0]);
    //o(n2)

    // o(1 + n + n2) = o(n2)
    // console.log(arr[0]); //o(1)
    
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }

    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < i; j++) {
    //         for (let k = 0; k < i; k++) {
    //             console.log(i);
    //         }
    //     }
    // }
}



// function insertNumber(range){
//     let array = [];

//     for(let j = 0; j<=range; j++){
//         array.push(Math.round(Math.random() * 100));
//     }

//     console.log(array);
// }
// function searchNumber(number){   

//     let array = [36, 46, 57, 20, 84, 29, 56, 45, 90, 40, 57, 72, 78, 33, 57, 29, 69, 44, 18, 28, 15, 39, 83, 50, 81, 54, 79, 84, 20, 93, 68, 84, 10, 48, 40, 35, 99, 20, 33, 3, 47, 55, 79, 84, 70, 15, 95, 96, 56, 79, 13, 53, 62, 100, 57, 43, 26, 53, 44, 14, 28, 79, 84, 80, 44, 99, 78, 98, 41, 8, 74, 92, 83, 80, 78, 64, 56, 19, 65, 55, 10, 98, 43, 88, 32, 42, 58, 36, 38, 6, 37, 16, 45, 93, 7, 72, 6, 25, 84, 44]
   
//     let result; 

//     for(let i=0; i<=array.length; i++){
//         if(number === array[i]){
//             result = `found in index ${i}`;
//             break;
//         }else{
//             result = 'not found!';
//         }
//     }
//     console.log(result);
// }


