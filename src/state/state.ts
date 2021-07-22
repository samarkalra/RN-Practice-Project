import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistStore from 'redux-persist/lib/persistStore';

/* ************ Reducers ************ */
const counterReducerPersistConfig = {
  key: 'counter',
  storage: AsyncStorage,
  whitelist: ['value'],
};

const rootReducer = combineReducers({
  counter: persistReducer(counterReducerPersistConfig, counterReducer),
});

/* ************ Store ************ */
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: true,
      serializableCheck: false,
    }),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
