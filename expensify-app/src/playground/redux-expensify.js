import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Action Generators

const addExpense = ({
     description = '',
     note = '',
     amount = 0,
     createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id != action.id );
        default:
            return state;
    } 
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 100}));
const expense2 = store.dispatch(addExpense({ description: 'Coffee', amount: 140}));
console.log(expense1);
console.log(expense2);

store.dispatch(removeExpense({id: expense1.expense.id}));

const demoState = {
    expenses: [{
        id: 'ioqejjiqeiuhgbcah',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500, //pennies
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};