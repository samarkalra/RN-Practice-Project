import {put, call} from '@redux-saga/core/effects';
import {decrement, increment} from '../../reducers/counterSlice';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function* incrementAsyncWorker() {
  yield call(delay, 1000);
  yield put(increment());
}

export function* decrementAsyncWorker() {
  yield call(delay, 1000);
  yield put(decrement());
}
