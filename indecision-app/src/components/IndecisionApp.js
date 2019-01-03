import React from 'react';
import AddOption from './AddOption';
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };

    handleDeleteOption = (option) => {
        this.setState((prevState) => {
            return {options: prevState.options.filter((o) => o !== option)};
        });
    };

    handlePick = () => {
        const index = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[index];
        console.log(option);
        this.setState(() => ({selectedOption: option}));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    };

    handleCloseModal = () => {
        this.setState(() => ({selectedOption: undefined}));
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

    render () {
        return (
            <div>
                <Header 
                    subtitle={this.props.subtitle}
                />
                <div className="container">
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
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        );
    }
}
