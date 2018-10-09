// Here it goes React code. JSX.

console.log("App.js is running!");

// LESSON 9
var template = <h1>Indecision App</h1>;
var appRoot = document.getElementById("app");

// We're gonna render this template above
// Takes 2 arguments. The JSX and the DOM element where we want to render it
ReactDOM.render(template, appRoot);