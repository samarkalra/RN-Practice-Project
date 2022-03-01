import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistStore from 'redux-persist/lib/persistStore';
import createSagaMiddleware from 'redux-saga';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
import rootSaga from './sagas';

/* ************ Reducers ************ */
const counterReducerPersistConfig = {
  key: 'counter',
  storage: AsyncStorage,
  whitelist: ['value'],
};

const rootReducer = combineReducers({
  counter: persistReducer(counterReducerPersistConfig, counterReducer),
});

/* ************ Saga Middleware ************ */
const sagaMiddleware = createSagaMiddleware();

/* ************ Store ************ */
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store};
export const persistedStore = persistStore(store);
