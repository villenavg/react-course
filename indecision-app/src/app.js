import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, "Testing 123");
ReactDOM.render(template, document.getElementById('app'));