"use strict";

// LESSON 9 - This file is gonna be compiled by Babel
// Here it goes React code. JSX.

console.log("App.js is running!");
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App - Lesson 10"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        ),
        React.createElement(
            "li",
            null,
            "Item three"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Alberto Villena"
    ),
    React.createElement(
        "p",
        null,
        "Age: 29"
    ),
    React.createElement(
        "p",
        null,
        "Location: Getafe"
    )
);

var appRoot = document.getElementById("app");

// We're gonna render this template above
// Takes 2 arguments. The JSX and the DOM element where we want to render it
ReactDOM.render(templateTwo, appRoot);
