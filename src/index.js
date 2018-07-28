//import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';

//import router from react-router
import {BrowserRouter} from 'react-router-dom';

//import redux components
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

//imprt files
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './store/reducers/index';

//redux deev tools - advanced for +async calls
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;

//store for redux
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

//app component wrapped in redux and react-router components
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);


//react render functions
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
