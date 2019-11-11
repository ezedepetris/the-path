import { takeLatest, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import UserActions, { UserTypes } from '../reducers/user';

function* getUserHandler() {
  try {
    const userId = yield AsyncStorage.getItem('UserId');
    
    yield put(UserActions.setUser(user));
  } catch (err) {
    console.log('getUserHandler error', err);
  }
}

function* getUserWatcher() {
  yield takeLatest(UserTypes.GET_USER, getUserHandler);
}

export default [
  getUserWatcher,
];
