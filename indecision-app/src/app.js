
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: []
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

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
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
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick} 
            disabled={!props.hasOptions}>
            What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <p> Options: {props.options.length}</p>
            <ol>
            {
                props.options.map((option, i) => <Option key={option} optionText={option}/>)
            }
            </ol>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
        </div>
    );
};

const Option = (props) => {
    return (
        <li>{props.optionText}</li>
    );
};

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption (event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => {
            return {error};
        });
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>  
        );
    }
}

const app = <IndecisionApp title="Indecision" subtitle = "Put your life in the hands of a computer"/>
ReactDOM.render(app, document.getElementById('app'));
