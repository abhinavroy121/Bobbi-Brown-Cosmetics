
import React from 'react'
import {combineReducers ,legacy_createStore as createStore, compose} from 'redux';
import {reducer} from './reducer.js';
const rootreducer = combineReducers({
    cart: reducer
})





export const store = createStore(
    rootreducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())
)
 

