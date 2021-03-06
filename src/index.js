import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AlmostFilmWeb from './AlmostFilmWeb/AlmostFilmWeb.js'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  reducers  from './AlmostFilmWeb/statemanage/reducers/loginReducers'

export const store = createStore(reducers);

console.log(store.getState());

ReactDOM.render(
<Provider store = {store}><AlmostFilmWeb /></Provider>
,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
