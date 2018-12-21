import React from 'react';
import Option from './Option'

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
export default Options;