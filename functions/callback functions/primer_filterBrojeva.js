"use strict";

// function filterNumbers(numbers, excludeNumbers) {
//     var filteredNumbers = [];

//     for (var i = 0; i < numbers.length; i++) {
//         var hasNumber = false;
//         for (var j in excludeNumbers) {
//             if (excludeNumbers[j] === numbers[i]) {
//                 hasNumber = true;
//                 break;
//             }
//         }
//         if (hasNumber) {
//             continue;
//         }

//         filteredNumbers[filteredNumbers.length] = numbers[i];
//     }

//     return filteredNumbers;
// }


// console.log(filterNumbers([4, 5, 3, 1, 7], [1, 3]));



//callback function

// function filter(numbers, shouldIAddTheNumber) {
//     var filteredNumbers = [];

//     for (var i = 0; i < numbers.length; i++) {
//         if (!shouldIAddTheNumber(numbers[i])) {
//             continue;
//         }

//         filteredNumbers[filteredNumbers.length] = numbers[i];
//     }

//     return filteredNumbers;
// }



// console.log(filter(
//     [4, 5, 3, 1, 7],
//     function (element) {
//         return (element !== 3 && element !== 5); // mozemo da stavimo sta god zelimo da izbacimo ili prikazemo iz niza
//     }));




//transform array

function map(numbers, transformerFunction) {
    var transformed = [];

    for (var i = 0; i < numbers.length; i++) {
        transformed[transformed.length] = transformerFunction(numbers[i]);
    }

    return transformed;
}



console.log(map(
    [2, 3, 4, 5],
    function (element) {
        return element * 2 + 3;
    }
))