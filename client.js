import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
  // import Reducer from 'reducers';
  // import rootSaga  from 'sagas';
  // import GAListener from 'components/GAListener';
  // import App from './app';
// const { Reducer } = require('spee.ch');
// const { rootSaga } = require('spee.ch');
// const { GAListener } = require('spee.ch');
// const { App } = require('spee.ch');
// const Speech = require('spee.ch');

// const siteConfig = require('siteConfig.js');

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
