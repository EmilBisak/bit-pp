//Zadatak 1
// Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

// function insertString(string1, string2, number = 1) {
//     var newString = "";

//     for (var i = 0; i < string1.length; i++) {
//         if (i === number -1) {
//             newString += string2
//         }
//         newString += string1[i];
//     }


//     return newString;
// }

// console.log(insertString("My random string", "JS ", ));


//Zadatak 2

// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.


function joinElements(array) {
    var newString = "";
    for( var i = 0; i < array.length; i++) {
        if(typeof array[i] !== "undefined" && typeof array[i] !== "object" && !isNaN(array[i] && !isFinite(array[i]))) {
            newString += array[i] + " ";
        }
    }
    return newString;
}

console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));
