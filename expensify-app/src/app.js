import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();
console.log(store.getState());

store.dispatch(addExpense({
    description: 'Water bill',
    amount: 4500
}));

store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 5000
}));

store.dispatch(setTextFilter("gas"));

setTimeout(() => {
    store.dispatch(setTextFilter("bill"));
}, 3000);

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

// ReactDOM.render(<AppRouter />, document.getElementById('app'));
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));

