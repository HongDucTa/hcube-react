import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import Dashboard from './Dashboard/Dashboard';
import Authentification from './Authentification/Authentification';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Authentification />, document.getElementById('root'));
ReactDOM.render(<Dashboard />, document.getElementById('root'));
//ReactDOM.render(<SimpleTimeseries />, document.getElementById('chart'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
