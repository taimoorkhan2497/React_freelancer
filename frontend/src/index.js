import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import { Provider } from "react-redux";
 


import App from './App';


ReactDOM.render(
    <Provider store={store}>
        <App/> 
    </Provider> ,
    document.getElementById('root')
);


