
class IndecisionApp extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        // return JSX expression
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() { 
        return (
            <div>
                <p> Options component here</p>
                <ol>
                    <Option />
                    <Option />
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>Option component here</li>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <p>AddOption component here</p> 
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));