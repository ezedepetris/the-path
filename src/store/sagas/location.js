import { takeLatest, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import LocationActions, { LocationTypes } from '../reducers/location';

function* setLocationHandler({location}) {
  try {
    console.log("LOCATION ON SAGA: ", location)
    yield put(LocationActions.newLocation(location));
  } catch (err) {
    console.log('getLocationHandler error', err);
  }
}

function* setDestinationHandler(location) {
  try {
    // const location = yield AsyncStorage.getItem('location');
    // const location ={ latitude: 37.3318456, longitude: -122.0296002 }
    
    yield put(LocationActions.newDestination(location));
  } catch (err) {
    console.log('getLocationHandler error', err);
  }
}

function* locationWatcher() {
  yield takeLatest(LocationTypes.SET_LOCATION, setLocationHandler);
  yield takeLatest(LocationTypes.SET_DESTINATION, setDestinationHandler);
}

export default [
  locationWatcher,
];
