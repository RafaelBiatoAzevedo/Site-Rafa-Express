import { combineReducers } from 'redux';
import stateHome from './stateHome';
import stateCart from './stateCart';

const rootReducer = combineReducers({ stateHome, stateCart });

export default rootReducer;
