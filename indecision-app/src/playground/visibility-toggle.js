const appRoot = document.getElementById('app');
let visible = false;

const onShowToggle = () => {
    visible = !visible;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility toggle!</h1>
            <button onClick={onShowToggle}>{!visible ? "Show me the secret!" : "Hide the secret!"}</button>
            {visible && <p>The secret is: BANANA!</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();