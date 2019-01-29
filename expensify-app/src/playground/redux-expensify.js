import { createStore, combineReducers } from 'redux';
import timestamp from 'time-stamp';

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