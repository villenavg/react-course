"use strict";

console.log("App.js is running!");
var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var onremoveAllOptions = function onremoveAllOptions() {
    app.options = [];
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var index = Math.floor(Math.random() * app.options.length);
    var option = app.options[index];
    alert(option);
};

var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options && app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { id: "remove-all", onClick: onremoveAllOptions },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option, i) {
                return React.createElement(
                    "li",
                    { key: option + "-" + i.toString() },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");
renderApp();
