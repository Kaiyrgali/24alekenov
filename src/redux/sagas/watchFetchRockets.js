import { takeEvery, put } from 'redux-saga/effects';
import getApi from '../../services/getApi';

export function* fetchRockets() {
  const _apiBase = 'https://api.spacexdata.com/v4/rockets'
  const data = yield getApi(_apiBase);
  const rocketsList = data.map((rocket) => [
    rocket.id, rocket.name
  ])
  yield put({ type: 'FETCH_ROCKETS_REQUEST', payload: rocketsList })
}

export default function* watchFetchRockets() {
  yield takeEvery('FETCH_ROCKETS', fetchRockets);
}