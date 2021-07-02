"use strict";
function add(n1, n2, showResult) {
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var num1 = 5;
var num2 = 10;
var printResult = true;
add(num1, num2, printResult);
