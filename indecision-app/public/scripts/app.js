"use strict";

// LESSON 9 - This file is gonna be compiled by Babel
// Here it goes React code. JSX.

var data = {
    title: "The Lord Of The Rings",
    subtitle: "The Community Of The Ring",
    options: ["Frodo", "Sam", "Aragorn"]
};
console.log("App.js is running!");
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        data.title
    ),
    data.subtitle && React.createElement(
        "p",
        null,
        data.subtitle
    ),
    React.createElement(
        "p",
        null,
        data.options && data.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Frodo"
        ),
        React.createElement(
            "li",
            null,
            "Sam"
        ),
        React.createElement(
            "li",
            null,
            "Aragon"
        )
    )
);

var user = {
    name: "Alberto",
    age: 29,
    location: "Getafe"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

// We're gonna render this template above
// Takes 2 arguments. The JSX and the DOM element where we want to render it
ReactDOM.render(template, appRoot);
