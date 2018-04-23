//Loops

// While

// var i = 0;

// while (i < 10) {
//     i++;

// }

// console.log(i);


// var numbers = [3, 4, -1, 5, -2, 0, -6];
// var i = 0;
// while (i < numbers.length) {

//     if (numbers[i] < 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }


// var y = numbers.length - 1;
// while (y >= 0) {
//     console.log(numbers[y]);
//     y--;
// }


// zadatak 1 

// var i = 0;
// var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// var odd = [];
// var even= [];
// var oddIndex = 0;
// var evenIndex = 0;

// while (i < nums.length) {
//     if (nums[i] % 2 === 0) {
//         even[evenIndex++] = nums[i];
//     } else {
//         odd[oddIndex++] = nums[i];   
//     }
//     i++;
// }
// console.log("odd:", odd);
// console.log("even:", even);



//zadatak2

// var i = 0;
// var sum = 0;
// while (i < 1000) {

//     if (i % 3 === 0 && i % 5 === 0) {
//        sum = sum + i; 
//     }
//     i++;
// }

// console.log(sum);


//zadatak3

// var i = 0;
// var a = [1,3,4,6,8];
// var sum2 = 0;
// var pro = 1;

// while (i < a.length) {
//     sum2 += a[i];
//     pro *= a[i];
//     i++;

// }

// console.log(sum2);
// console.log(pro);



//zadatak 4

// var i = 0;
// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var singleString = "";

// while (i < x.length) {
//     singleString = 
// }



// Do-while
// var i = 10;
// do {
//     i++;
// } while (i<10);

// console.log(i);



//For 

var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

    if (i > 3) {
        console.log("Stop iteration");
        break;
    }

}
console.log(sum);