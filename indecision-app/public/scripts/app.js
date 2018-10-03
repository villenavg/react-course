console.log("App.js is running!");

//JSX - JavaScript XML - It is a JavaScript Syntax Extension. It is provided by React. 
// We have templates

// This template won't render in the first place. Browser do not know what to do with them.
// We're actually going to solve this problem by taking our code with JSX and compiling it down into 
// regular boring old javascript, so that browsers can understand it.

// var template = <p>This is JSX from app.js!</p>; // This is JSX. This template is completely static.

// We're going to use babel. (https://babeljs.io). Translates into ES5.
// We will set up babel locally in following classes.
var template = React.createElement("h1", {id: "msg"}, "Something new!");
var appRoot = document.getElementById("app");

// We're gonna render this template above
// Takes 2 arguments. The JSX and the DOM element where we want to render it
ReactDOM.render(template, appRoot);