"use strict";

function putMinElementOnBeginning(numbers) {
    var minElementIndex = 0;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[minElementIndex] > numbers[i]) {
            minElementIndex = i;
        }
    }

    var tmp = numbers[0];
    numbers[0] = numbers[minElementIndex];
    numbers[minElementIndex] = tmp;

    return numbers;
}

function sortFromMiToMax(numbers) {
    var result = [];
    for (var i = 0; i < numbers.length-1; i++) {
        result[i] = putMinElementOnBeginning(numbers.slice(i, numbers.length - 1))[0];
    }

    return result;
}

console.log(putMinElementOnBeginning([4, 5, 3, 1, 7]));
