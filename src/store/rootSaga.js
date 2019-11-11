import { all, fork } from 'redux-saga/effects';
import userSagas from './sagas/user';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function* root() {
  yield all([
    ...forkList(userSagas),
  ]);
}
