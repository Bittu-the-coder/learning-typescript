"use strict";
function add(n1, n2, n3) {
    return n3 ? n1 + n2 + n3 : n1 + n2;
}
function addRestPara(n1, n2, ...nums) {
    return n1 + n2 + nums.reduce((a, b) => a + b, 0);
}
console.log(add(1, 2, 4));
function getItems(items) {
    return new Array().concat(items);
}
