import React from 'react';

const EditExpensePage = (props) => {
    return (
        <div>
            Editing item with id: {props.match.params.id}
        </div>
    );
}

export default EditExpensePage;