// LESSON 9 - This file is gonna be compiled by Babel
// Here it goes React code. JSX.

console.log("App.js is running!");
var template = (
    <div>
        <h1>Indecision App - Lesson 10</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Alberto Villena</h1>
        <p>Age: 29</p>
        <p>Location: Getafe</p>
    </div>
);

var appRoot = document.getElementById("app");

// We're gonna render this template above
// Takes 2 arguments. The JSX and the DOM element where we want to render it
ReactDOM.render(templateTwo, appRoot);