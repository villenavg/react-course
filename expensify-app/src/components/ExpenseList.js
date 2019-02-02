import React from 'react';
import { connect } from 'react-redux';
import ExenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <div>
            {props.expenses.map((expense) => {
                return <ExenseListItem key={expense.id} {...expense}/>;
            })}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
