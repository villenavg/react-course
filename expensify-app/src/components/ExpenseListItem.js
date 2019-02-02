import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
    <div>
        <h2>Item</h2>
        <p>Description: {description}</p>
        <p>Amount: {amount}</p>
        <p>Created at: {createdAt}</p>
    </div>
);

export default ExpenseListItem;