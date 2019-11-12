import { takeLatest, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import DirectionsActions, { DirectionsTypes } from '../reducers/directions';

function* getDirectionsHandler() {
  try {
    const directions = yield AsyncStorage.getItem('Directions');
    
    yield put(DirectionsActions.setDirections(directions));
  } catch (err) {
    console.log('getDirectionsHandler error', err);
  }
}

function* addDirectionHandler({address}) {
  try {
    // const directions = yield AsyncStorage.getItem('Directions');
    
    yield put(DirectionsActions.setNewDirection(address));
  } catch (err) {
    console.log('addDirectionHandler error', err);
  }
}


function* removeDirectionHandler({id}) {
  try {
    // const directions = yield AsyncStorage.getItem('Directions');
 
    
    yield put(DirectionsActions.deleteDirection(address));
  } catch (err) {
    console.log('removeDirectionHandler error', err);
  }
}

function* directionsWatcher() {
  yield takeLatest(DirectionsTypes.GET_DIRECTIONS, getDirectionsHandler);
  yield takeLatest(DirectionsTypes.ADD_DIRECTION, addDirectionHandler);
  yield takeLatest(DirectionsTypes.REMOVE_DIRECTION, removeDirectionHandler);
}

export default [
  directionsWatcher,
];
