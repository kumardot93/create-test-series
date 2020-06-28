import { createStore, combineReducers } from 'redux';
import Profile from './reducers/Profile.js';
import Test from './reducers/Test.js';
import TestSeries from './reducers/TestSeries.js';
// import SocketState from './reducers/SocketState.js';

const Store = createStore(combineReducers({ Profile, Test, TestSeries }), {});

export default Store;
