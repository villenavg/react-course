// LESSON 9 - This file is gonna be compiled by Babel
// Here it goes React code. JSX.

var data = {
    title: "The Lord Of The Rings",
    subtitle: "The Community Of The Ring",
    options: ["Frodo", "Sam", "Aragorn"]
}
console.log("App.js is running!");
var template = (
    <div>
        <h1>{data.title}</h1>
        {data.subtitle && <p>{data.subtitle}</p>}
        <p>{data.options && data.options.length > 0 ? "Here are your options": "No options"}</p>
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

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
};

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById("app");

// We're gonna render this template above
// Takes 2 arguments. The JSX and the DOM element where we want to render it
ReactDOM.render(template, appRoot);