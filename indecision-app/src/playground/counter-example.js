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
renderApp();