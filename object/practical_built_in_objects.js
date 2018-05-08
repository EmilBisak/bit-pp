/* Task 1
    Write a function to convert a number from one base (radix) to another.
    Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

    'ff', 16, 8 -> 377 */

// function convertBase(string, baseInput, baseOutput) {
//     var number = parseInt(string, baseInput);
//     var convertedBase = number.toString(baseOutput);
//     return convertedBase;
// }

// console.log(convertBase("ff", 16, 8));




// task 2
// Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

// 	12345 -> 54321



// function reverseNumbers(string) {
//     return parseInt(string.split("").reverse().join(""))
// }

// console.log(reverseNumbers("12345"));



// task 3
// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -> “abeemrstw”

// function sortLetters(string) {
//     return string.toLowerCase().split("").sort().join("");
// }

// console.log(sortLetters("Webmaster"));


// task 4
// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"


// function sortAlphabeticly(string) {
//
//     var newArray = string.split(" ");
//     var newString = "";
//     var newArray2 = [];
//
//     for (var i = 0; i < newArray.length; i++) {
//         newString = newArray[i].split("").sort().join("");
//         newArray2 += newString + " ";
//     }
//
//     return newArray2;
// }
//
// console.log(sortAlphabeticly("Republic Of Serbia"));



// task 5
// Write a function to split a string and convert it into an array of words.
//
// 	"John Snow" -> [ 'John', 'Snow' ]


// function changeToArray (string) {
//   return string.split(" ");
// }
//
// console.log(changeToArray("John Snow"));



// task 6
// Write a function to convert a string to its abbreviated form.
//
// 	"John Snow" -> 	"John S."

// function fromStringToInitials (string) {
//   var newString = string.split(" ");
//   var firstName = newString[0];
//   var lastName = newString[1].charAt(0) + ".";
//   newString = firstName + " " + lastName;
//   return newString
// }
//
// fromStringToInitials("John Snow");
