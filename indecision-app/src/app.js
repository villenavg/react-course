import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const app = <IndecisionApp subtitle="Put your life in the hands of a computer"/>
ReactDOM.render(app, document.getElementById('app'));
