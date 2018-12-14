"use strict";

var appRoot = document.getElementById('app');
var visible = false;

var onShowToggle = function onShowToggle() {
    visible = !visible;
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility toggle!"
        ),
        React.createElement(
            "button",
            { onClick: onShowToggle },
            !visible ? "Show me the secret!" : "Hide the secret!"
        ),
        visible && React.createElement(
            "p",
            null,
            "The secret is: BANANA!"
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
