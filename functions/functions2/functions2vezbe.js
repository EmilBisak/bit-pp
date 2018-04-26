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

//task9

function replaceSpace (string, character) {
    for (var i = 0; i < string.length; i++) {
        if (character === undefined) {
            character = "-";
        }
        if (string[i]===" ") {
            string[i]=character;
        }
    }

    return string;
}

console.log(replaceSpace("hello world", "+"));
