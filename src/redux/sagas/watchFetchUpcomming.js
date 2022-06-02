import { takeEvery, put } from 'redux-saga/effects';
import getApi from '../../services';

export function* fetchUpcoming() {
  const _apiBase = 'https://api.spacexdata.com/v5/launches/upcoming'
  const data = yield getApi(_apiBase);
  yield put({ type: 'FETCH_UPCOMMING_REQUEST', payload: data })
}

export default function* watchFetchUpcoming() {
  yield takeEvery('FETCH_ROCKETS', fetchUpcoming);
}