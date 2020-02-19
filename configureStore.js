import {createStore, combineReducers} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';

import reducer from './reducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
};
const pReducer = persistReducer(persistConfig, reducer);
export const store = createStore(pReducer);
export const persistor = persistStore(store);
