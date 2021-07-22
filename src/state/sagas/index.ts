import {all} from '@redux-saga/core/effects';
import {
  watchDecrementAsync,
  watchIncrementAsync,
} from './watchers/counterWatchers';

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchDecrementAsync()]);
}
