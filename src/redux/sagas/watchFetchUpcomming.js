import { takeEvery, put } from 'redux-saga/effects';
import getApi from '../../services/getApi';

export function* fetchUpcoming() {
  const _apiBase = 'https://api.spacexdata.com/v5/launches/upcoming'
  const data = yield getApi(_apiBase);
  console.log('Upcomming >',data);
  const upcommingList = data.map((rocket) => [
    rocket.id, rocket.name
  ])
  yield put({ type: 'FETCH_UPCOMMING_REQUEST', payload: upcommingList })
}

export default function* watchFetchUpcoming() {
  yield takeEvery('FETCH_ROCKETS', fetchUpcoming);
}