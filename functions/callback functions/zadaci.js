//zadatak 1

// var changePlace = (function (array) {
//     var newArray = [];
//     var first;
//     var last;

//     for (var i = 0; i < array.length; i++) {
//         if (i === 0) {
//             newArray[array.length - 1 ] = array[0];
//             continue;
//         }

//         if (i === array.length - 1) {
//             newArray[0] = array[i];
//             continue;
//         }

//         newArray[i] = array[i];
//     }

//     return newArray
// })([4, 5, 11, 9]);

// console.log(changePlace);




//zadatak 2

// var rectangleSurface = (function (a, b) {
//     var result = a * b;
//     return result
// })(4, 5);

// console.log(rectangleSurface);




//zadatak 3

// var letterAppearances = (function (string) {
//     var numberOfReplacements = 0;
//     var newString = "";

//     for (var i = 0; i < string.length; i++) {

//         if (string[i] === "m" || string[i] === "M") {
//             newString += "*";
//             numberOfReplacements++;
//             continue;
//         }

//         newString += string[i];
//     }

//     return newString + ", " + numberOfReplacements;

// })("prograMming");


// console.log(letterAppearances);




//zadatak 4

// var sugestEmail = (function (name,surname) {
//     var emailAddres = name+"."+surname+"@gmail.com";

//     return emailAddres;
// })("emil","bisak");

// console.log(sugestEmail);




//zadatak 5

var octalToDecimal = (function (octalNum) {
    

})(034)

console.log(octalToDecimal);

