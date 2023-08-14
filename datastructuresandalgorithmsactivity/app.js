// let arr  = [1, 2, 5, 7, 10,1,123,13,1,2,54,6,7,8,9,2];

// //simple search
// function simpleSearch(arr, target){
//     //check if the number is in the array
//     let result;
//     for(let i = 0; i<= arr.length; i++){
//          //yes return the index number
//         if(target === arr[i]){
//             result = `found in index ${i}`;
//             break;
//          //no print not found
//         }else{
//             result = 'not found!';
//         }
//     }
    
//     // console.log(result);
// }

// // simpleSearch(arr, 1);


// //binary search
// function binarySearch(arr, target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1;
//     let ctr = 0;

//     while(leftIndex<=rightIndex){
//         ctr++;
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2);

//         if(target === arr[middleIndex]){
//             return middleIndex;
//         }

//         if(target < arr[middleIndex]){
//             rightIndex = middleIndex-1;
//         }else{
//             leftIndex = middleIndex+1;
//         }
//             // console.log(ctr);
//     }


// }
// binarySearch(arr, 10)

// console.log(binarySearch(arr, 10));

// let start = Date.now();
// console.log(simpleSearch(arr,4))
// let timeTaken = Date.now() - start;
// console.log("Simple Search : " + timeTaken + " milliseconds");

// let start1 = Date.now();
// console.log(binarySearch(arr,4))
// let timeTaken1 = Date.now() - start1;
// console.log("Binary Search : " + timeTaken1 + " milliseconds");


// Array



//add anywhere in the middle

//retrieve an item

//sorting three numbers

// function sort (a, b, c) {
//   if(a < b && b < c) {
//     console.log(a, b , c);
//   } else if (a < b && c < b) {
//     console.log(a, c, b);
//   } else if (b < a && a < c) {
//     console.log(b, a, c);
//   } else if(b < a && c < a) {
//     console.log(b, c, a); 
//   } else if(c < a && a < b) {
//     console.log(c, a, b);
//   } else {
//     console.log(c, b , a);
//   }
// }

// sort(3,2,1);

class NewArray{
    constructor(){
        this.length = 0,
        this.data = {}
    }

// retrieve an item
    getItem(index){
        return this.data[index];
    }
// push an item

    pushItem(item){
        this.data[this.length] = item;
        this.length++;
    }

//pop an item
    popItem(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    //remove an item
    deleteItem(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index){
        for(let i = index; i<this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }

    printItems(){
        for(let i = 0; i<=this.length-1; i++){
            console.log(this.data[i]);
        }
    }

}

let arr = new NewArray();

arr.pushItem(1);
arr.pushItem(2);
arr.pushItem(3);
// arr.printItems(arr);
console.log(arr);
console.log(arr.getItem(1));
// console.log(arr.popItem());
console.log(arr);
// console.log(arr.deleteItem(1));
// console.log(arr);
console.log(arr.shiftItems(2));
console.log(arr);
