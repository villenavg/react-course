import React from 'react';

const PortfolioItemPage = (props) => (
    <div>
        <h1>A thing I've done</h1>
        <p>Item id is: {props.match.params.id}</p>
    </div>
);

export default PortfolioItemPage;