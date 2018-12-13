// argument object - no longer bound with arrow functions 
console.log("")
console.log("arguments object")
console.log("")
const add = function (a, b) {
    // prints everything passed in the call function
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 2, 3));

const addArrow = (a,b) => { 
    // this will throw a ReferenceError: arguments is not defined
    // If we want to use arguments, use ES5 functions
    // console.log(arguments);
    return a + b;
}
console.log(addArrow(56, 1));

// this keyword - no longer bound with arrow functions
console.log("")
console.log("this keyword")
console.log("")

const user = {
    name: "Alberto",
    cities: ["Getafe", "Helsinki", "Madrid"],
    printPlacesLived: function () {
        // this keyword is bound to the object itself, when we define a function as a property of that object
        console.log(this.name);
        console.log(this.cities);

        // normal function
        console.log("normal function")
        const that = this;
        this.cities.forEach(function (city) { // there's no bound this. this.name is not accesible
            console.log(that.name + ' has lived in ' + city);
        });

        // Arrow function
        // arrow functions uses the this of the context where they were created
        console.log("arrow function")
        this.cities.forEach((city) => { // this.name is accesible because it's the context where the fuction lives
            console.log(this.name + ' has lived in ' + city);
        });

    },
    printPlacesLivedArrow: () => {
        // This piece of code is gonna crash bcs this is no longer bound, and we're trying to access this.cities.
        this.cities.forEach(function (city) { // there's no bound this. this.name is not accesible
            console.log(that.name + ' has lived in ' + city);
        });
    },
    printPlacesLivedES6() {
        // behaves exactly the same as an ES5: has arguments, this keyword is bound
        console.log("Clean syntax ES6")
        // map: transforms an array. can be assigned to another variable
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        return this.cities.map((city) => { // this.name is accesible because it's the context where the fuction lives
            return this.name + ' has lived in ' + city;
        });
    }
};

user.printPlacesLived();
// user.printPlacesLivedArrow();
console.log(user.printPlacesLivedES6());

// Challenge area

const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log("Multiplier: " + multiplier.multiply());
