"use strict";
let numList = [2, 3, 5, 6, 764, 3, 2];
let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(results);
console.log(num);
console.log(sum);
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(19, 223);
swapNumbs[0];
swapNumbs[1];
