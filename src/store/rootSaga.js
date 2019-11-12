import { all, fork } from 'redux-saga/effects';
import directionsSagas from './sagas/directions';
import locationSagas from './sagas/location';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function* root() {
  yield all([
    ...forkList(directionsSagas),
    ...forkList(locationSagas),
  ]);
}
