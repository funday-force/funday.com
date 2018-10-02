import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
,document.getElementById('root'));
=======
import store from './store';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
>>>>>>> master
