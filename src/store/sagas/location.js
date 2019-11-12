import { takeLatest, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import LocationActions, { LocationTypes } from '../reducers/location';

function* getLocationHandler() {
  try {
    // const location = yield AsyncStorage.getItem('location');
    const location ={ latitude: 37.3318456, longitude: -122.0296002 }
    
    yield put(LocationActions.setLocation(location));
  } catch (err) {
    console.log('getLocationHandler error', err);
  }
}

function* setDestinationHandler(location) {
  try {
    // const location = yield AsyncStorage.getItem('location');
    // const location ={ latitude: 37.3318456, longitude: -122.0296002 }
    
    yield put(LocationActions.setDestination(location));
  } catch (err) {
    console.log('getLocationHandler error', err);
  }
}

function* locationWatcher() {
  yield takeLatest(LocationTypes.GET_LOCATION, getLocationHandler);
  yield takeLatest(LocationTypes.SET_DESTINATION, getLocationHandler);
}

export default [
  locationWatcher,
];
