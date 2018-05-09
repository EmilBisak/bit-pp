// task 1
// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]


// function duplicateArray (array) {
//     var mixedArray = [];
//     for (var i = 0; i < array.length; i++) {
//         mixedArray.push(array[i],array[i]);
//     }

//     return mixedArray;
// }

// console.log(duplicateArray([2, 4, 7, 11, -2, 1]));


// task 2
// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

// function removeDuplicates(array) {
//     var output = [];
//     for (var i = 0; i < array.length; i++) {
//          array.reduce(function (array, i) {
//             if (array.indexOf(i) < 0) array.push(i);
//             return array.sort(function (a, b) {
//                 return a - b;
//             });
//         }, output);
//     }

//     return output;
// }

// console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));


// task 3
// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

// function isArrayOdd (array){
//     if (array.length % 2 !== 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isArrayOdd([1, 2, 9, 2, 1, 1]));

// function lessThanMiddle (array) {
//     var ceilNumber = Math.ceil(array.length/2);
//     if (array.length % 2 === 0) {
//         console.log("Error");        
//         return false;
//     }else {
//         return ceilNumber;
//     }
// }

// console.log(lessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11, 45, 9]));

// function lessThanMiddleEl(array) {
//     var middleIndex = Math.floor(array.length / 2);
//     var middleElement = array[middleIndex];
//     var count = 0;
    
//     if (array.length % 2 === 0) {
//         console.log("Error");
//         return false;
//     }else {
//         for (var i = 0; i < array.length; i++) {
//             if (array[i] < middleElement) {
//                 count++;
//             }
//         }
//         return count;
//     }
// }

// console.log(lessThanMiddleEl([-1, 8.1, 3, 6, 2.3, 44, 2.11]));


// task 4
// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

function SmallestElement(minValue,minLastIndex) {
    this.minValue = minValue;
    this.minLastIndex = minLastIndex;
}



