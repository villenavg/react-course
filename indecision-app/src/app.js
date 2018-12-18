
class IndecisionApp extends React.Component {
    render () {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ["Thing one", "Thing two", "Thing three"];
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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
                <p> Options: {this.props.options.length}</p>
                <ol>
                {
                    this.props.options.map((option, i) => <Option key={option} optionText={option}/>)
                }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.optionText}</li>
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