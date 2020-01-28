import React from 'react';
import ReactDOM from 'react-dom';
import CreditApp from './components/CreditApp';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bulma/css/bulma.min.css';
import './styles/main.scss';

ReactDOM.render(<CreditApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
