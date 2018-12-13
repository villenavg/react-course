"use strict";

// argument object - no longer bound with arrow functions 
console.log("");
console.log("arguments object");
console.log("");
var add = function add(a, b) {
    // prints everything passed in the call function
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 2, 3));

var addArrow = function addArrow(a, b) {
    // this will throw a ReferenceError: arguments is not defined
    // If we want to use arguments, use ES5 functions
    // console.log(arguments);
    return a + b;
};
console.log(addArrow(56, 1));

// this keyword - no longer bound with arrow functions
console.log("");
console.log("this keyword");
console.log("");

var user = {
    name: "Alberto",
    cities: ["Getafe", "Helsinki", "Madrid"],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // this keyword is bound to the object itself, when we define a function as a property of that object
        console.log(this.name);
        console.log(this.cities);

        // normal function
        console.log("normal function");
        var that = this;
        this.cities.forEach(function (city) {
            // there's no bound this. this.name is not accesible
            console.log(that.name + ' has lived in ' + city);
        });

        // Arrow function
        // arrow functions uses the this of the context where they were created
        console.log("arrow function");
        this.cities.forEach(function (city) {
            // this.name is accesible because it's the context where the fuction lives
            console.log(_this.name + ' has lived in ' + city);
        });
    },
    printPlacesLivedArrow: function printPlacesLivedArrow() {
        // This piece of code is gonna crash bcs this is no longer bound, and we're trying to access this.cities.
        undefined.cities.forEach(function (city) {
            // there's no bound this. this.name is not accesible
            console.log(that.name + ' has lived in ' + city);
        });
    },
    printPlacesLivedES6: function printPlacesLivedES6() {
        var _this2 = this;

        // behaves exactly the same as an ES5: has arguments, this keyword is bound
        console.log("Clean syntax ES6");
        // map: transforms an array. can be assigned to another variable
        return this.cities.map(function (city) {
            return _this2.name + ' has lived in ' + city;
        });
        return this.cities.map(function (city) {
            // this.name is accesible because it's the context where the fuction lives
            return _this2.name + ' has lived in ' + city;
        });
    }
};

user.printPlacesLived();
// user.printPlacesLivedArrow();
console.log(user.printPlacesLivedES6());

// Challenge area

var multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 4,
    multiply: function multiply() {
        var _this3 = this;

        return this.numbers.map(function (number) {
            return number * _this3.multiplyBy;
        });
    }
};
console.log("Multiplier: " + multiplier.multiply());
