"use strict";
// Write ts program that’s calculate sum of two numbers using function?
function sum(num1, num2) {
    var result = num1 + num2;
    console.log("The sum of two number is ", result);
}
sum(30, 40);
// Write ts program that’s calculate sum of two numbers 20,30 using function? And add 5 number in result after calculation?
function sum2(num1, num2) {
    var result = num1 + num2;
    return result;
}
sum(30, 40);
var a = sum2(30, 40);
a = a + 5;
console.log(a);
// Write ts program that’s calculate sum of two numbers using arrow function?
var Add = () => {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
};
Add();
