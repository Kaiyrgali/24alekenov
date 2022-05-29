import { takeEvery, put } from 'redux-saga/effects';

export function* addMyLaunches() {
  console.log('action>', action);
  yield put({ type: 'ADD_MYLAUNCHES', payload: action });
}

export default function* watchMyLaunches() {
  yield takeEvery('ADD_MYLAUNCHES', addMyLaunches);
}