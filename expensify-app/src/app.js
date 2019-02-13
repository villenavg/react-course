import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();
console.log(store.getState());

store.dispatch(addExpense({
    description: 'Water bill',
    amount: 4500
}));

store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 5000,
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: 'Rent',
    amount: 109500
}));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

// ReactDOM.render(<AppRouter />, document.getElementById('app'));
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));

