console.log("App.js is running!");
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const onremoveAllOptions = () => {
    app.options = [];
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? "Here are your options": "No options"}</p>
            <p>Options added: {app.options.length}</p>
            <button id="remove-all" onClick={onremoveAllOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((option, i) => <li key={option + "-" + i.toString()}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById("app");
renderApp();