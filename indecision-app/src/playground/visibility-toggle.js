
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            secret: "Cuca"
        }
        this.handleVisibility = this.handleVisibility.bind(this);
    }
    handleVisibility(){
        this.setState((prevState) => {
           return {visible: !prevState.visible};
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility toggle!</h1>
                <button onClick={this.handleVisibility}>{!this.state.visible ? "Show me the secret!" : "Hide the secret!"}</button>
                {this.state.visible && <p>The secret is: {this.state.secret}</p>}
            </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));
