// import { takeEvery, put } from 'redux-saga/effects';
// import getApi from '../../services/getApi';

// export function* fetchRockets() {
//   const _apiBase = 'https://api.spacexdata.com/v4/rockets'
//   const data = yield getApi(_apiBase);
//   const rocketsList = data.map((rocket) => [
//     rocket.id, rocket.name
//   ])
//   yield put({ type: 'FETCH_ROCKETS_REQUEST', payload: rocketsList })
// }

// export function* watchFetchRockets() {
//   yield takeEvery('FETCH_ROCKETS', fetchRockets);
// }
import { all } from 'redux-saga/effects';
import watchFetchRockets from './watchFetchRockets';
import watchFetchUpcoming from './watchFetchUpcomming';

export default function* rootSaga() {
  yield all([
    watchFetchRockets(),
    watchFetchUpcoming(),
  ]);
  console.log('finish Saga')
};