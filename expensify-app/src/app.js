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
}));

store.dispatch(addExpense({
    description: 'Gas bill',
}));

store.dispatch(setTextFilter("gas"));

setTimeout(() => {
    store.dispatch(setTextFilter("Miau"));
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

