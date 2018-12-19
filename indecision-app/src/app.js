
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);

        this.state = {
            options: ["Thing one", "Thing two", "Thing three"]
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }

    handlePick() {
        const index = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[index];
        alert(option);
    }

    render () {
        return (
            <div>
                <Header 
                    title={this.props.title} 
                    subtitle={this.props.subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
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
        return (
            <div>
                <button 
                onClick={this.props.handlePick} 
                disabled={!this.props.hasOptions}>
                What should I do?
                </button>
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
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
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
    constructor(props){
        super(props);
        this.onAddOption = this.onAddOption.bind(this);
    }

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

const app = <IndecisionApp title="Indecision" subtitle = "Put your life in the hands of a computer"/>
ReactDOM.render(app, document.getElementById('app'));