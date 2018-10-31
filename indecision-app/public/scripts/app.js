"use strict";

// LESSON 9 - This file is gonna be compiled by Babel
// Here it goes React code. JSX.

console.log("App.js is running!");
var template = React.createElement(
  "h1",
  null,
  "Indecision App - Lesson 9"
);
var appRoot = document.getElementById("app");

// We're gonna render this template above
// Takes 2 arguments. The JSX and the DOM element where we want to render it
ReactDOM.render(template, appRoot);
