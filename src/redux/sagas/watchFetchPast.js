import { takeEvery, put } from 'redux-saga/effects';
import getApi from '../../services';

export function* fetchPast() {
  const _apiBase = 'https://api.spacexdata.com/v5/launches/past'
  const data = yield getApi(_apiBase);
  yield put({ type: 'FETCH_PAST_REQUEST', payload: data })
}

export default function* watchFetchPast() {
  yield takeEvery('FETCH_ROCKETS', fetchPast);
}