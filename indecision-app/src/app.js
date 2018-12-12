// LESSON 9 - This file is gonna be compiled by Babel
// Here it goes React code. JSX.

var data = {
    title: "The Lord Of The Rings",
    subtitle: "The Community Of The Ring"
}
console.log("App.js is running!");
var template = (
    <div>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
        <ol>
            <li>Frodo</li>
            <li>Sam</li>
            <li>Aragon</li>
        </ol>
    </div>
);

var user = {
    name: "Alberto",
    age: 29,
    location: "Getafe"
};
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById("app");

// We're gonna render this template above
// Takes 2 arguments. The JSX and the DOM element where we want to render it
ReactDOM.render(template, appRoot);