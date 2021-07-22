import {decrementAsync, incrementAsync} from '../../reducers/counterSlice';
import {takeEvery} from '@redux-saga/core/effects';
import {
  decrementAsyncWorker,
  incrementAsyncWorker,
} from '../workers/counterWorkers';

export function* watchIncrementAsync() {
  yield takeEvery(incrementAsync().type, incrementAsyncWorker);
}

export function* watchDecrementAsync() {
  yield takeEvery(decrementAsync().type, decrementAsyncWorker);
}
