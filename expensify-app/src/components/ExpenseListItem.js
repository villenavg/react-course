import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
    <div>
        <h2>Item</h2>
        <p>Description: {description}</p>
        <p>Amount: {amount}</p>
        <p>Created at: {createdAt}</p>
        <button 
            onClick={(e) => {
                dispatch(removeExpense({ id }));
            }}>
            Remove
        </button>
    </div>
);

export default connect()(ExpenseListItem);
