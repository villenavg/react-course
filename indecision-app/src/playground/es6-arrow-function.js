// ES5 - function
const square = function (n) {
    return n * n;
};

// ES6 - arrow
const squareArrow = (n) => {return n * n};

// ES6 - arrow expressions
const squareArrowExpr = (n) => n * n;

console.log(square(8));
console.log(squareArrow(9));
console.log(squareArrowExpr(12));

// Challenge
const getFirstName = (fullName) => {
    return fullName.split(" ")[0]
};

const getFirstNameExpr = (fullName) => fullName.split(" ")[0];

console.log(getFirstName("Alberto Villena"))
console.log(getFirstNameExpr("Perico Delgado"))
