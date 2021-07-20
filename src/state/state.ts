import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';

/* ************ Reducers ************ */
const rootreducer = combineReducers({
  counter: counterReducer,
});

/* ************ Store ************ */
export const store = configureStore({
  reducer: rootreducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
