"use strict";

// ES5 - function
var square = function square(n) {
    return n * n;
};

// ES6 - arrow
var squareArrow = function squareArrow(n) {
    return n * n;
};

// ES6 - arrow expressions
var squareArrowExpr = function squareArrowExpr(n) {
    return n * n;
};

console.log(square(8));
console.log(squareArrow(9));
console.log(squareArrowExpr(12));

// Challenge
var getFirstName = function getFirstName(fullName) {
    return fullName.split(" ")[0];
};

var getFirstNameExpr = function getFirstNameExpr(fullName) {
    return fullName.split(" ")[0];
};

console.log(getFirstName("Alberto Villena"));
console.log(getFirstNameExpr("Perico Delgado"));
