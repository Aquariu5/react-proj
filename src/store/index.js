import {combineReducers, createStore} from 'redux';
import {displayReducer} from './reducers/displayReducer.js';
import {pageReducer} from './reducers/pageReducer.js';
const rootReducer = combineReducers( {
    displayReducer,
    pageReducer
})

export const store = createStore(rootReducer); 