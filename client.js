import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import Reducer from 'speech/reducers';
import rootSaga  from 'speech/sagas';
import GAListener from 'speech/components/GAListener';
import App from 'speech/app';

const siteConfig = require('siteConfig.js');

// get the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__ || null;
//
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// create and apply middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const reduxMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ ? compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__()) : middleware;

// create the store
let store;
if (preloadedState) {
    store = createStore(Reducer, preloadedState, reduxMiddleware);
} else {
    store = createStore(Reducer, reduxMiddleware);
}

sagaMiddleware.run(rootSaga);

// render the app
hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <GAListener>
                <App />
            </GAListener>
        </BrowserRouter>
    </Provider>,
    document.getElementById('react-app')
);

console.log('hello');
