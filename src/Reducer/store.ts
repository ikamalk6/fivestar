// import {createStore, applyMiddleware} from 'redux';
// import rootReducer from '.';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// const Store = createStore(rootReducer, applyMiddleware(thunk, logger));
// export default Store;

import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import {createStore, applyMiddleware, compose} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '.';

const enhancer = compose(applyMiddleware(thunk, createLogger({})));
const persistConfig = {
  key: 'root',
  timeout: 0,
  storage: AsyncStorage,
  whitelist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);
