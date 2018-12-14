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

var count = 0;
var addOne = function addOne() {
    count++;
    renderApp();
};
var minusOne = function minusOne() {
    count--;
    renderApp();
};
var reset = function reset() {
    count = 0;
    renderApp();
};
var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset"
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");
renderApp();
