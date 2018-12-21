
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const optionsStorage = localStorage.getItem('options');
            if (optionsStorage) {
                this.setState(() => ({options: JSON.parse(optionsStorage)}));
            }
        } catch (e) {
            // nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(option) {
        this.setState((prevState) => {
            let options = prevState.options;
            options.splice(options.indexOf(option), 1);
            return {options: prevState.options.filter((o) => o !== option)};
        });
    };

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

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    render () {
        return (
            <div>
                <Header 
                    subtitle={this.props.subtitle}
                />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
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
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};
Header.defaultProps = {
    title: "Indecision"
}

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
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            <p> Options: {props.options.length}</p>
            <ol>
            {
                props.options.map((option, i) => <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                    />)
            }
            </ol>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
        </div>
    );
};

const Option = (props) => {
    return (
        <li>
            <div>
                <div>{props.optionText}</div>
                <button onClick={(e) => props.handleDeleteOption(props.optionText)}>Remove</button>
            </div>
        </li>
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
        
        this.setState(() => ({error}));
        
        if (!error) {
            event.target.elements.option.value = '';
        }
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

const app = <IndecisionApp subtitle="Put your life in the hands of a computer"/>
ReactDOM.render(app, document.getElementById('app'));
