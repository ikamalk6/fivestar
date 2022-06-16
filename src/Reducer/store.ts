import {createStore,applyMiddleware} from 'redux'
import rootReducer from '.';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const Store=createStore(rootReducer,applyMiddleware(thunk,logger));
export default Store;