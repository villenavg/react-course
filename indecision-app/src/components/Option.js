import React from 'react';

const Option = (props) => (
        <li>
            <div>
                <div>{props.optionText}</div>
                <button onClick={(e) => props.handleDeleteOption(props.optionText)}>Remove</button>
            </div>
        </li>
    );

export default Option;