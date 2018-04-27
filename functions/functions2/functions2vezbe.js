// function checkString(type) {
//     if ("string" === typeof type) {
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(checkString(6588));


// task2

// function checkBlank(val) {
//     if (val === " ") {
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(checkBlank(" "));




// task3
// function stringN(string, number) {
//     var name = "";
//     for (var i = 0; i < number; i++) {
//         name += string;
//     } return name;
// }
// console.log(stringN("yo", 8));



// task4

// function countLetter(letter, string) {
//     var count = 0;
//     string = string.toLowerCase();
//     letter = letter.toLowerCase();

//     for (var i = 0; i < string.length; i++) {
//         if (letter === string[i]) {
//             count++
//         }
//     }
//     return count;
// }
// console.log(countLetter("D", "afdjghdakshjdDDddddD"));


// task5

// function occurrenceOfChar(letter, string) {
//     var count = 1;
//     string = string.toLowerCase();
//     letter = letter.toLowerCase();
//     var result = -1;
//     for (var i = 0; i < string.length; i++) {

//         if (letter !== string[i]) {
//             count++;

//         } else {
//            result = count;
//            break;
//         }
//     }

//     return result;
// }

// console.log(occurrenceOfChar("d", "avhljfhglji"));


// task6
function indexOfLastChar(letter, string) {
    string = string.toLowerCase();
    letter = letter.toLowerCase();

    for (var i = string.length - 1; i >= 0; i--) {
        if (letter === string[i]) {
            return i + 1
        }
    }

    return -1;
}
console.log(indexOfLastChar("d", "avhljfdhdglji"));

//task7

function stringToArray(string) {
    var array = [];

    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            array[i] = null;
        }else {
            array[i] = string[i];
        }


    }
    return array;
}
console.log(stringToArray("hg dd fgdfg gfdgfdgfg"));

//task8

function isPrime(number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}




//Zadatak9
// function replaceSeparator(string,separator = "-") {
//     var newString = "";

//     for(var i = 0; i < string.length; i++) {
//         if(string[i] === " ") {
//            newString += separator;
//         }else {
//                 newString += string[i]
//         }
//     }
//     return newString;
// }

// console.log(replaceSeparator("Hello World fdgsds gfd",));


//Zadatak 10
function nChar(string, number) {
    var newString = "";

    for (var i = 0; i < number; i++) {
        newString += string[i];
    }
    
    return newString + "...";
}

console.log(nChar("Hello world", 7));


//Zadatak 11

// function arrayOfNum(array) {
//     var newArray = [];

//     for( var i = 0; i < array.length; i++) {
//         if(typeof array[i] === "number" && array[i] !== Infinity && !isNaN(array[i])) {
//             newArray += array[i] + " ";
//         }
//     }
//     return newArray;
// }

// console.log(arrayOfNum([1, 21, undefined, 42, 1e+3, Infinity, NaN]));


//Zadatak 13

// function humanizeNumber(num) {
//     if (typeof num == "undefined") {
//         return;
//     }

//     if (num % 100 >= 11 && num % 100 <= 13) {
//         return num + "th";
//     }

//     switch (num % 10) {
//         case 1:
//             return num + "st";
//             break;
//         case 2:
//             return num + "nd";
//             break;
//         case 3:
//             return num + "rd";
//             break;
//     }
//     return num + "th";
// }

// // Output
// console.log(humanizeNumber());
// console.log(humanizeNumber(1));
// console.log(humanizeNumber(8));
// console.log(humanizeNumber(301));
// console.log(humanizeNumber(402));

// console.log(402%10);








