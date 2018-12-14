// LESSON 9 - This file is gonna be compiled by Babel
// Here it goes React code. JSX.

const data = {
    title: "The Lord Of The Rings",
    subtitle: "The Community Of The Ring",
    options: ["Frodo", "Sam", "Aragorn"]
}
console.log("App.js is running!");
const template = (
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

let count = 0;
const addOne = () => {
    count++;
    renderApp();
};
const minusOne = () => {
    count--;
    renderApp();
};
const reset = () => {
    count = 0;
    renderApp();
};
const renderApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button> 
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
renderApp();