
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
    onClickAction() {
        console.log("Click click click");
    }

    render() {
        // return JSX expression
        return (
            <div>
                <button onClick={this.onClickAction}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    onClickRemoveAll () {
        console.log("Remove all button");
    }

    render() { 
        return (
            <div>
                <p> Options: {this.props.options.length}</p>
                <ol>
                {
                    this.props.options.map((option, i) => <Option key={option} optionText={option}/>)
                }
                </ol>
                <button onClick={this.onClickRemoveAll}>Remove all</button>
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
    onAddOption (event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        if (option) {
            event.target.elements.option.value = '';
            alert(option);
        }
    }
    render() {
        return (
            <form onSubmit={this.onAddOption}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));